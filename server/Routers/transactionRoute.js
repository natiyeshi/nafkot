const express = require("express")
const router = express.Router()
const TransactionModel = require("../Models/Db/Transaction.model")
const TopupRequestModel = require("../Models/Db/TopupRequest.model")
const TransactionJoi = require("../Models/Joi/TransactionRequest.joi")
const TopupTransactionJoi = require("../Models/Joi/topupTransactionRequest.joi")
const TopupDbTransactionJoi = require("../Models/Joi/topupDbRequest.joi")
const { decodeOrderJwt,generateOrderJwt } = require("../Config/core/jwtFunc")
const SettingSchema = require("../Models/Db/setting.model")


const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)
const createError = require("http-errors")

router.post("/checkout-session",async (req,res,next)=>{
    try{    
        const order = await TransactionJoi.validateAsync(req.body)
        const cart = order.cart
        let hashedData = {...order}
        delete hashedData.cart
        const token = generateOrderJwt(hashedData)
        const session = await stripe.checkout.sessions.create({
            payment_method_types : ["card"],
            mode : "payment",
            line_items : cart.map((data) => {
                return {
                    price_data : {
                        unit_amount : data.product.price * 100,
                        currency : "usd",
                        product_data : {
                            name : data.product.title,
                            images : [data.product.items[0].img]
                        },
                    },
                    quantity : data.amount
                }
            }),
            
            success_url : `${process.env.SERVER_URL_DEV}/success?session_id={CHECKOUT_SESSION_ID}&order=${token}`,
            cancel_url : `${process.env.SERVER_URL_DEV}/checkout`,
        })
        res.json({url:session.url})
    }catch(err){  
        if(err.isJoi){
            next(createError.BadRequest(err.message))
        } else {
            next(err)
        }
    }
})

router.post("/checkout-session-topup",async (req,res,next)=>{
    try{    
        
       const order = await TopupTransactionJoi.validateAsync(req.body)
       const token = generateOrderJwt(order)
       const data = await SettingSchema.find()
       const setting = data[0]
       const session = await stripe.checkout.sessions.create({
            payment_method_types : ["card"],
            mode : "payment",
            line_items : [{
                price_data : {
                    unit_amount : parseFloat((order.amount / setting.currency).toFixed(2))  * 100,
                    currency : "usd",
                    product_data : {
                        name : `${order.amount} birr card`,
                    },
                },
                quantity : 1
            }],
            success_url : `${process.env.SERVER_URL_DEV}/success/topup?session_id={CHECKOUT_SESSION_ID}&order=${token}`,
            cancel_url : `${process.env.SERVER_URL_DEV}/products/topup`,
        })
        res.json({url:session.url})
    }catch(err){  
        console.log(err)
        if(err.isJoi){
            next(createError.BadRequest(err.message))
        } else {
            next(err)
        }
    }
})


router.post("/save_payment",async (req,res,next) =>  {
    try{
        const {session_id,token} = req.body
        const session = await stripe.checkout.sessions.retrieve(session_id)
        const [pass,payload] = decodeOrderJwt(token)
        const isSaved = await TransactionModel.findOne({id:session.id})
        if(isSaved){
            return next(createError.BadRequest("session already saved!"))
        }
        if(pass == false) throw createError.Unauthorized("invalid token")
        let savedData = {...payload,currency:session.currency,status:session.status,totalPrice:session.amount_total,id:session.id}
        delete savedData.iat
        await TransactionModel.create(savedData)
        res.send({ ok : "ok"})
    }catch(err){
        console.log(err)
        if(err.isJoi){
            next(createError.BadRequest(err.message))
        } else {
            next(err)
        }
    }
})


router.post("/save_payment_topup",async (req,res,next) =>  {
    try{
        const {session_id,token} = req.body
        const session = await stripe.checkout.sessions.retrieve(session_id)
        const [pass,payload] = decodeOrderJwt(token)
        const isSaved = await TopupRequestModel.findOne({id:session.id})
        if(isSaved) {
            return next(createError.BadRequest("session already saved!"))
        }
        if(pass == false) throw createError.Unauthorized("invalid token")
        let savedData = {...payload,currency:session.currency,status:session.status,totalPrice:session.amount_total,id:session.id}
        delete savedData.iat
        const validatedData = await TopupDbTransactionJoi.validateAsync(savedData)
        const data = await TopupRequestModel.create(validatedData)
        console.log(payload,data,savedData)
        res.send(data)
    }catch(err){
        console.log(err)
        if(err.isJoi){
            next(createError.BadRequest(err.message))
        } else {
            next(err)
        }
    }
})


router.post("/gettransactions",async  (req,res,next) =>  {
    try{
       const data = await TransactionModel.find()
       return res.json(data)
    }catch(err) {
        next(err)
    }
})
 

router.post("/save_transaction",async  (req,res,next) =>  {
    try{
       const data = await TransactionModel.find()
       return res.json(data)
    }catch(err) {
        next(err)
    }
})
 
router.post("/gettransaction/:id",async  (req,res,next) =>  {
    try{
        const { id } = req.params
        const data = await stripe.issuing.transactions.list({
            limit: 3,
          });
          
        return res.json({data,id})
    }catch(err) {
        next(err)
    }
})


router.post("/deleteAllTransaction",async  (req,res,next) =>  {
    try{
       
       throw createError.BadRequest("feature disabled")
       const data = await TransactionModel.deleteMany({})
       return res.json(data)
    } catch(err) {
        next(err)
    }

})



module.exports = router