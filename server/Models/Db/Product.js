const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  items: {
    type: [],
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;