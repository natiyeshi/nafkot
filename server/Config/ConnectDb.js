const mongoose = require("mongoose")

const connectDb = () =>{
    mongoose.connect(process.env.db_url)
    const db = mongoose.connection
    db.on("error",()=>{
        console.log("not connected")
    })
    db.once("open",()=>{
        console.log("connected")
    })
}

module.exports = connectDb