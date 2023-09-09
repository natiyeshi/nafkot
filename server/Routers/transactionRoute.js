const express = require("express")
const router = express.Router()
const TransactionModel = require("../Models/Db/Transaction.model")
const TransactionJoi = require("../Models/Joi/Transaction.joi")

const createError = require("http-errors")

router.post("/buyitems",async (req,res,next) =>  {
    try{
        const transactionRequest = req.body
        const transactionData = await TransactionJoi.validateAsync(transactionRequest)
        
        
        await TransactionModel.create(transactionData)
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


router.post("/gettransactions",async  (req,res,next) =>  {
    try{
       const data = await TransactionModel.find().populate("cart.productId")
       return res.json(data)
    }catch(err) {
        next(err)
    }

})


router.post("/deleteAllTransaction",async  (req,res,next) =>  {
    try{
       const data = await TransactionModel.deleteMany({})
       return res.json(data)
    }catch(err) {
        next(err)
    }

})

module.exports = router