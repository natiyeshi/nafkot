const express = require("express")
const router = express.Router()
const TransactionModel = require("../Models/Db/Transaction.model")
const TopupRequestModel = require("../Models/Db/TopupRequest.model")
const TransactionJoi = require("../Models/Joi/TransactionRequest.joi")
const TopupTransactionJoi = require("../Models/Joi/topupTransactionRequest.joi")
const TopupDbTransactionJoi = require("../Models/Joi/topupDbRequest.joi")
const { decodeOrderJwt,generateOrderJwt } = require("../Config/core/jwtFunc")
const SettingSchema = require("../Models/Db/setting.model")
const ProductSchema = require("../Models/Db/Product.model")


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
                console.log(data)
                return {
                    price_data : {
                        unit_amount : data.product.price * 100,
                        currency : "usd",
                        product_data : {
                            name : data.product._id,
                            images : [data.product.items[0].img],
                        },
                    },
                    quantity : data.amount
                }
            }),
            
            success_url : `${req.protocol + '://' + req.get('host')}/success?session_id={CHECKOUT_SESSION_ID}&order=${token}`,
            cancel_url : `${req.protocol + '://' + req.get('host')}/checkout`,
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
       console.log(order)
       const session = await stripe.checkout.sessions.create({
            payment_method_types : ["card"],
            mode : "payment",
            line_items : [{
                price_data : {
                    unit_amount : parseFloat((order.amount / setting.currency).toFixed(2))  * 100,
                    currency : "usd",
                    product_data : {
                        name : order.id,
                        description : `${order.amount} birr card`
                    },
                },
                quantity : 1
            }],
            success_url : `${process.env.SERVER_URL}/success/topup?session_id={CHECKOUT_SESSION_ID}&order=${token}`,
            cancel_url : `${process.env.SERVER_URL}/products/topup`,
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
        console.log(payload)
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
    //    const data = await TransactionModel.find()
       
       return res.json(data)
    }catch(err) {
        next(err)
    }
})


router.post("/getallitemstransaction",async (req,res,next)=>{
    try{
        const transactions = await TransactionModel.find()
        res.json(transactions)
    }catch(err){
        next(err)
    }
})


router.post("/getitemstransactionlist/:session_id",async (req,res,next)=>{
    try{
        const { session_id } = req.params
        await stripe.checkout.sessions.listLineItems(
            session_id,
            async function(err, lineItems) {
                if(err) {
                    next(createError.BadRequest(err.raw.message))
                }
                else{
                    try{
                        const products = lineItems.data
                        let datas = await Promise.all(products.map(async (data) => {
                            const file = await ProductSchema.find({ _id: data.description });
                            console.log(file);
                            return file;
                        }));
                        res.send(datas) 
                    }catch(err){
                        next(err)
                    }
                }
            }
        );
    }catch(err){
        next(err)
    }
})

const endpointSecret = "whsec_530662c0a9a26d6998f898e08efd3fbae262db25451f76afd504599105d8c5e3";

router.post('/webhook', (request, response) => {
    const sig = request.headers['stripe-signature'];
    let event;
    // console.log(request.body)
    console.log("------------logged------------")
    const body = JSON.stringify(request.body, null, 2);
    try {
      event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
    } catch (err) {
      console.log("--problem----------------------")
    //   console.log(err)

      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
    console.log("--works----------------------")
    // console.log(event)
    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntentSucceeded = event.data.object;
        // Then define and call a function to handle the event payment_intent.succeeded
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
    console.log("------------------------")
    
    // Return a 200 response to acknowledge receipt of the event
    response.send();
});
  

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


router.get("/deleteAllTransaction",async  (req,res,next) =>  {
    try{
       
       throw createError.BadRequest("feature disabled")
       const data = await TransactionModel.deleteMany({})
       return res.json(data)
    } catch(err) {
        next(err)
    }

})



module.exports = router