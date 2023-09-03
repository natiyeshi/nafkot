const mongoose = require("mongoose")

mongoose
    .connect(process.env.DB_URL_REMOTE,{dbName : process.env.DB_NAME})
    .then(() => console.log("connected to Db"))
    .catch(err => console.log(err.message))

mongoose.connection.on("connected",() => {
    console.log("DB connection sucessfully started :)")
})

mongoose.connection.on("error",()=>{
    console.log("connection failed :(");
})

mongoose.connection.on("disconnected",() => {
    console.log("Db connection halted !!"); 
}) 

process.on("SIGINT",async ()=>{
    await mongoose.connection.close() 
    process.exit(0)
})