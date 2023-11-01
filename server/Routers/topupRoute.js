const express = require("express")
const router = express.Router()
const TopupSchema = require("../Models/Db/Topup.model")
const createError = require("http-errors")
const TopupJoi = require("../Models/Joi/topup.joi")
const SettingSchema = require("../Models/Db/setting.model")

router.post("/addtopup",async (req,res,next)=>{
    try{
        const request = req.body
        const newData = await TopupJoi.validateAsync(request)
        let data = await TopupSchema.findOne(request);
        if (data) throw createError.BadRequest("Amount already registered.");
        const newProducts = await TopupSchema.create(newData);
        res.send(newProducts)
    }catch(err){
        console.log(err)
        if(err.isJoi) return next(createError.BadRequest(err.message))
        next(createError.BadRequest(err.message))
    }

})  


router.post("/gettopups",async (req,res,next)=>{
    try{
        const topups = await TopupSchema.find();
        res.json(topups)
    }catch(err){
        next(err)
    }

})  


router.post("/gettopups/:id",async (req,res,next)=>{
    try{
        const {id} = req.params
        const topup = await TopupSchema.findOne({_id:id});
        res.json(topup)
    }catch(err){
        next(err)
    }
})  


router.post("/gettopupcurrency/:id",async (req,res,next)=>{
    try{
        const {id} = req.params
        const topup = await TopupSchema.findOne({_id:id});
        const setting = await SettingSchema.find()
        res.send({topup,setting:setting[0]})
    }catch(err){
        next(err)
    }
})  



router.post("/deletetopups/:id",async (req,res,next)=>{
    try{
        const id = req.params.id 
        const result = await TopupSchema.deleteOne({_id:id});
        res.json(result)
    }catch(err){
        next(createError.BadRequest(err.message))
    }
})  


router.post("/edit",async (req,res,next)=>{
    try{
        const { oldData,newAmount } = req.body
        let data = await TopupSchema.findOne({amount:newAmount});
        if (data) throw createError.BadRequest("Amount already registered.");
        await TopupJoi.validateAsync({amount : newAmount})
        const result = await TopupSchema.updateOne({_id:oldData},{amount:newAmount});
        res.json(result)
    }catch(err){
        next(createError.BadRequest(err.message))
    }
})  

router.post("/deletetopups",async (req,res,next)=>{
    try{
        throw createError("feature halted")
        const topups = await TopupSchema.deleteMany({});
        res.json({success:"success"})
    }catch(err){
        next(createError[500](err.message))
    }
})  

module.exports = router
