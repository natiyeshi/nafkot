require("dotenv").config()
const express = require("express")
const app = express()
const connectDb = require("./Config/ConnectDb")
const router = require('./Routers/clientRoute');
app.use(express.json())

app.use('/api', router);

app.get("*",(req,res) => res.send("are you lost ?"))

app.listen(4000,()=>{
    connectDb()
    console.log(".....running on port 4000")
})