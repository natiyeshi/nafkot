const express = require("express")
const createError = require("http-errors")
const router = express.Router()

const bcrypt = require("bcrypt")
const UserSchema = require("../Models/Db/User.model")
const UserJoi = require("../Models/Joi/User.joi")
const { generateJwt,isUserLogedIn } = require("../Config/core/jwtFunc")

router.post("/registeruser",async (req,res,next)=>{
    try{
        const user = req.body
        console.log(user)
        const newUser = await UserJoi.validateAsync(user)
        const savedUser = await UserSchema.create(newUser)
        const token = generateJwt({_id : savedUser._id})
        res.json({token,user:savedUser})
    }catch(err){
        if(err.isJoi) return next(createError.BadRequest(err.message))
        if(err.code == 11000) return next(createError.BadRequest("this email has an account!"))
        next(err)
    }
})


router.post("/getallusers",async (req,res,next)=>{
    try{
        const users = await UserSchema.find({},{password: 0})
        res.json(users)
    }catch(err){
        next(err)
    }
})


router.post("/loginuser",async (req,res,next)=>{
    try{
        const {email,password} = req.body
        const user = await UserSchema.findOne({email})
        if(user == null) throw(createError.BadRequest("wrong credential email"))
        const compare = await bcrypt.compare(password,user.password)
        if(compare == false) throw(createError.BadRequest("wrong credential password"))
        const token = generateJwt({_id:user._id})
        res.json({token,user})

    }catch(err){
        console.log(err)
        if(err.isJoi) return next(createError.BadRequest(err.message))
        next(err)
    
    }
})

router.post("/isuserlogedin",isUserLogedIn,async (req,res,next) => {
    
    try {
        var user = await UserSchema.findOne({_id:req.payload._id})
        user["password"] = null
        res.json(user)
    }catch(e){
        next(e)
    }
})

module.exports = router