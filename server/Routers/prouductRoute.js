const express = require("express")
const router = express.Router()
const ProductSchema = require("../Models/Db/Product")
const createError = require("http-errors")
const { productJoi } = require("../Models/Joi/product")
const cloudinary = require('cloudinary').v2;
const multer = require("multer")

// Configuration 
cloudinary.config({
    cloud_name: process.env.CLOUND_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUND_API_SECRET,
});
   
const upload = multer({ dest: 'uploads/' });
  

router.post('/addProduct', async (req, res, next) => {
    try {

        const product = req.body
        const value = await productJoi.validateAsync(product)
        const newProduct = await ProductSchema.create(value)
        res.send(newProduct)
    } catch (err) {
        console.log(err)
        if(err.isJoi) return next(createError.BadRequest(err.message))
        next(err.message)
    }
});

module.exports = router
