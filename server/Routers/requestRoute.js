const express = require("express")
const router = express.Router()
const TopupRequestSchema = require("../Models/Db/TopupRequest.model")
const createError = require("http-errors")
const TopupRequestJoi = require("../Models/Joi/topupDbRequest.joi")

router.post("/getrequests",async (req,res,next)=>{
    try{
        const result = await TopupRequestSchema.find();
        res.send(result)
    }catch(err){
        if(err.isJoi) return next(createError.BadRequest(err.message))
        next(createError.BadRequest(err.message))
    }

})  

router.post("/sendmoney/:id",async (req,res,next)=>{
    try{
        const { id } = req.params
        const data = await TopupRequestSchema.findOneAndUpdate({_id:id},{transfered:true},{new:true});
        res.json(data)
    }catch(err){
        next(createError.BadRequest("item not found"))
    }
})  


// router.post("/deletetopups/:id",async (req,res,next)=>{
//     try{
//         const id = req.params.id 
//         const result = await TopupSchema.deleteOne({_id:id});
//         res.json(result)
//     }catch(err){
//         next(createError.BadRequest(err.message))
//     }
// })  


// router.post("/edit",async (req,res,next)=>{
//     try{
//         const { oldData,newAmount } = req.body
//         let data = await TopupSchema.findOne({amount:newAmount});
//         if (data) throw createError.BadRequest("Amount already registered.");
//         await TopupJoi.validateAsync({amount : newAmount})
//         const result = await TopupSchema.updateOne({_id:oldData},{amount:newAmount});
//         res.json(result)
//     }catch(err){
//         next(createError.BadRequest(err.message))
//     }
// })  

router.post("/deleteallrequests",async (req,res,next)=>{
    try{
        throw createError[400]("feature halted")
        const topups = await TopupRequestSchema.deleteMany({});
        res.json({success:topups})
    }catch(err){
        next(err)
    }
})  

module.exports = router
