const jwt = require("jsonwebtoken")
const createError = require("http-errors")

const generateJwt = (data,time = "1y") => {
    return jwt.sign(data,process.env.ACCESS_TOKEN_SECRET,{expiresIn : time})
}

const isUserLogedIn = (req,res,next) => {
    try{
        console.log(req.headers['authorization'])
        if(!req.headers['authorization']) throw createError.Unauthorized()
        const authHeader = req.headers['authorization']
        const token = authHeader.split(" ")[1]
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,payload)=>{
            if(err){
                const message = err.name == "JsonWebTokenError" ? "Unauthorized" : err.message
                return next(createError.Unauthorized(message))
            }
            req.payload = payload
            next()
        })
    }catch(e){
        next(createError.Unauthorized())
    }
}


const isAdminLogedIn = (req,res,next) => {
    try{
        if(!req.headers['authorization']) throw createError.Unauthorized()
        const authHeader = req.headers['authorization']
        const token = authHeader.split(" ")[1]
        jwt.verify(token,process.env.ADMIN_ACCESS_TOKEN_SECRET,(err,payload)=>{
            if(err){
                const message = err.name == "JsonWebTokenError" ? "Unauthorized" : err.message
                return next(createError.Unauthorized(message))
            }
            req.payload = payload
            next()
        })
    }catch(e){
        next(createError.Unauthorized())
    }
}


module.exports = {
    generateJwt,
    isUserLogedIn,
    isAdminLogedIn
}
