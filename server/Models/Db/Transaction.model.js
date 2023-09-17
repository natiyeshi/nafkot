const mongoose = require('mongoose');
   
const Type = {
    type: String,
    required: true
}

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
    currency:Type,
    status:Type,
    totalPrice : {
        type : Number,
        required : true
    }
  
 
},{
    timestamps : true
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;