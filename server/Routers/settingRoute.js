const express = require("express")
const router = express.Router()
const SettingSchema = require("../Models/Db/setting.model")
const createError = require("http-errors")
const SettingJoi = require("../Models/Joi/setting.joi")

router.post("/updatecurrency",async (req,res,next)=>{
    try{
        const { currency } = req.body
        const newData = await SettingJoi.validateAsync({currency})
        const oldDataId = await SettingSchema.find()
        const newProduct = await SettingSchema.findOneAndUpdate({_id:oldDataId[0]._id},newData,{new : true});
        res.send(newProduct)
    }catch(err){
        console.log(err)
        if(err.isJoi) return next(createError.BadRequest(err.message))
        next(createError.BadRequest(err.message))
    }

})  

router.post("/getcurrency",async (req,res,next)=>{
    try{
        const newProducts = await SettingSchema.find();
        res.send(newProducts[0])
    }catch(err){
        console.log(err)
        next(createError.BadRequest(err.message))
    }
})

router.post("/createcurrency",async (req,res,next)=>{
    res.json({message : "feature halted!"})
    return
    try{
        const request = req.body
        const newData = await SettingJoi.validateAsync(request)
        const newProducts = await SettingSchema.create(newData);
        res.send(newProducts)
    }catch(err){
        console.log(err)
        if(err.isJoi) return next(createError.BadRequest(err.message))
        next(createError.BadRequest(err.message))
    }

})  

module.exports = router
