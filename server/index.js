require("dotenv").config()

const mongoose = require("mongoose")

mongoose
    .connect(process.env.DB_URL_REMOTE,{dbName : process.env.DB_NAME})
    .then(() => console.log("connected to Db"))
    .catch(err => console.log(err.message))

mongoose.connection.on("connected",() => {
    console.log("DB connection sucessfully started :)")
})

mongoose.connection.on("error",(err)=>{
    console.log("connection failed :(",err);
})

mongoose.connection.on("disconnected",() => {
    console.log("Db connection halted !!"); 
}) 

process.on("SIGINT",async ()=>{
    await mongoose.connection.close() 
    process.exit(0)
})

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
const topupRoute = require("./Routers/topupRoute")
const topupRequestRoute = require("./Routers/requestRoute")
const settingRoute = require("./Routers/settingRoute")

//configs
app.use("/",productRoute)
app.use("/transaction/",transactionRoute)
app.use("/auth/",authRoute)
app.use("/admin/",adminRoute)
app.use("/topup/",topupRoute)
app.use("/request/",topupRequestRoute)
app.use("/setting/",settingRoute)

app.get("/",(req,res,next)=>{
    res.send("working fine!!") 
})

app.use((req,res,next) => {
    next(createError.NotFound("route not found"))
})

app.use((err,req,res,next) => {
    res.status(err.status || 500)
    console.log(err)
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