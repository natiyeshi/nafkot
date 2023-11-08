const express = require("express")
const router = express.Router()
const ProductSchema = require("../Models/Db/Product.model")
const createError = require("http-errors")
const productJoi = require("../Models/Joi/product.joi")
const cloudinary = require('cloudinary').v2;
const multer = require("multer")
const path = require('path');
const { emit } = require("../Models/Db/setting.model")
// Configuration 
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_SECRET,
});
   
const upload = multer({ dest: 'uploads/' });

router.post('/uploadItem',upload.single('img'), (req, res,next) => {
    try{
        
        const {name,price,id} = req.body
        
        if(name == "" || price == "" || id == ""){
            return next(createError.BadRequest("empty file"))
        }
        
        const imgName = id+":"+Date.now()
        const cloudRes = cloudinary.uploader.upload(req.file.path, {public_id: imgName})
        
        cloudRes.then(async (data) => {
            const datas = await ProductSchema.findByIdAndUpdate({_id:id},{$push : {items : {name,amount : price,img : data.secure_url}}})
            return res.json({passed:true,datas})
        }).catch(async (err)  => {
            try{
                 console.log(err)
                 await ProductSchema.findByIdAndDelete({_id:id})
                 return next(err)
            }catch(e){
                return next(e)
            }
            
        });  

    } catch(err) {
        console.log(err)
        return next(err)
    }
});
  

router.post('/addproduct', async (req, res, next) => {
    try {
        const product = req.body
        // const value = await productJoi.validateAsync(product)
        const newProduct = await ProductSchema.create(product)
        res.send(newProduct._id)
    } catch (err) {
        console.log(err)
        if(err.isJoi) return next(createError.BadRequest(err.message))
        next(err)
    }
});


router.post("/getproducts",async (req,res,next)=>{
    try{
        const newProducts = await ProductSchema.find({ $expr: { $gt: [{ $size: "$items" }, 0] } }).sort({ _id: -1 });
        res.send(newProducts)
    }catch(err){
        console.log("error")
        next(err)
    }

})  

router.post("/getproducts/:num",async (req,res,next)=>{
    try{
        const num = req.params.num
        const newProducts = await ProductSchema.find({ $expr: { $gt: [{ $size: "$items" }, 0]}}).limit(num).sort({ _id: -1 });
        res.send(newProducts)
    }catch(err){
        next(err)
    }

})  

router.post("/findproduct/:id",async (req,res,next)=>{
    try{
        const id = req.params.id
        const newProducts = await ProductSchema.findById(id);
        res.send(newProducts)
    }catch(err){
        next(createError.NotFound("product not found"))
    }
})  


router.post("/deleteproduct/:id",async (req,res,next)=>{
    try{
        const id = req.params.id
        const newProducts = await ProductSchema.findByIdAndDelete(id);
        res.send(newProducts)
    }catch(err){
        next(err)
    }

})  


module.exports = router
