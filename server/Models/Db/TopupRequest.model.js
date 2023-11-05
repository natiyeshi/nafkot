const mongoose = require('mongoose');

const topupRequestSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  senderFullName : {
    type : String,
    required : true
  },
  senderEmail : {
    type : String,
    required : true
  },
  receiverFullName : {
    type : String,
    required : true
  },
  receiverPhoneNumber : {
    type : String,
    required : true
  },
  receiverPhoneNumber2 : {
    type : String,
    required : true
  },
  currency:{
    type : String,
    required : true
  },
  status:{
      type : String,
      required : true
  },
  totalPrice : {
        type : Number,
        required : true
  },
  transfered : {
    type : Boolean,
    default : false,
  },
  id : {
    type : String,
    required : true,
    unique : true,
  }

  
},{
  timestamps : true
});

const TopupRequest = mongoose.model('TopupRequest', topupRequestSchema);

module.exports = TopupRequest;