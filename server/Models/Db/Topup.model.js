const mongoose = require('mongoose');

const topupSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
});

const Topup = mongoose.model('Topup', topupSchema);

module.exports = Topup;