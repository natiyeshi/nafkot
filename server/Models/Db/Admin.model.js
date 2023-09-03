const mongoose = require('mongoose');
const bcrypt = require("bcrypt")

const adminSchema =  mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
})


adminSchema.pre('save', async function (next) {
    try {
      if (!this.isModified('password')) {
        return next();
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
  
      return next();
    } catch (error) {
      return next(error);
    }
  });
  
  const Admin = mongoose.model('Admin', adminSchema);
  
  module.exports = Admin;