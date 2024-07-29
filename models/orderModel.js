const mongoose = require('mongoose');

const CartProduct = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  additionalInfo: {
    type: [String]
  },
  sku: {
    type: [String]
  }
});

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email:{ 
    type: String,
    required: true
  },
  number:{
    type: Number,
    required: true
  },
  billingAddress:{ 
    type: String,
    required: true
  },
  shippingAddress:{ 
    type: String,
    required: true
  },
  gstNumber:{ 
    type: String,
    required: true
  },
  cart:{ 
    type: [CartProduct],
    required: true
  },
  status:{
    type: String,
    required: true
  },
  total:{
    type: Number,
    required: true
  },
  orderedAt:{
    type: Date, 
    default: Date.now
  }
});

module.exports = mongoose.model('Order', orderSchema);
