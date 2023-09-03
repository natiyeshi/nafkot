require("dotenv").config()
require("./Config/connectDb")

const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const createError = require("http-errors")

const app = express()

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan("dev"))

const productRoute = require("./Routers/prouductRoute")
const transactionRoute = require("./Routers/transactionRoute")
const authRoute = require("./Routers/auth")
const adminRoute = require("./Routers/adminAuth")

//configs
app.use("/",productRoute)
app.use("/transaction/",transactionRoute)
app.use("/auth/",authRoute)
app.use("/admin/",adminRoute)

app.get("/",(req,res,next)=>{
    res.send("working fine!!") 
})

app.use((req,res,next) => {
    next(createError.NotFound("route not found"))
})

app.use((err,req,res,next) => {
    res.status(err.status || 500)
    res.send({
        error: {
            "status" : err.status || 500,
            "message" : err.message || " internale server error",
        }
    })
})

app.listen(PORT,()=>{
    console.log(`running on port ${PORT}`)
})