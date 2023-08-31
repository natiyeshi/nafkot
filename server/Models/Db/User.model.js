const mongoose = require('mongoose');
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
  
  firstName : {
    type : String,
    required : true,
  },
  lastName : {
    type : String,
    required : true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  
},{
  timestamps:true
});


userSchema.pre('save', async function (next) {
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

const User = mongoose.model('User', userSchema);

module.exports = User;