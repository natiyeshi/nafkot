const express = require("express")
const createError = require("http-errors")
const router = express.Router()
const AdminSchema = require("../Models/Db/Admin.model")
const AdminJoi = require("../Models/Joi/Admin.joi")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

router.post("/loginadmin",async (req,res,next)=>{
    try{
        const {username,password} = req.body
        let admin = await AdminSchema.findOne({username})
        if(admin == null) throw(createError.BadRequest("wrong credential username"))
        const compare = await bcrypt.compare(password,admin.password)
        if(compare == false) throw(createError.BadRequest("wrong credential password"))
        const token = jwt.sign({_id:admin._id},process.env.ADMIN_ACCESS_TOKEN_SECRET)
        admin.password = null
        res.json({token,admin})
    }catch(err){
        console.log(err)
        if(err.isJoi) return next(createError.BadRequest(err.message))
        next(err)
    }
})

router.post("/registeradmin",async (req,res,next)=>{
    try{
        const admin = req.body
        const cleanAdmin = await AdminJoi.validateAsync(admin)
        let savedAdmin = await AdminSchema.create(cleanAdmin)
        savedAdmin.password = null
        res.json(savedAdmin)
    }catch(err){
        console.log(err)
        if(err.isJoi) return next(createError.BadRequest(err.message))
        next(err)
    }
})

module.exports = router