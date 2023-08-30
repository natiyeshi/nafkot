const mongoose = require('mongoose');
   
const Type = {
    type: String,
    required: true
}

const cartItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    amount: {
        type: Number,
        required: true,
        min: 1
    }
});

const transactionSchema = new mongoose.Schema({
    senderLastName : Type,
    senderEmail: Type,
    senderPhoneNumber: Type,
    reciverFirstName: Type,
    reciverLastName: Type,
    reciverEmail: Type,
    reciverPhoneNumber: Type,
    reciverPhoneNumber2: Type,
    reciverCity: Type,
    reciverRegion: Type,
    message: Type,
    cart : {
        type : [cartItemSchema],
        required : true,
    },
    totalPrice : {
        type : Number,
        required : true
    }
  
 
},{
    timestamps : true
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;