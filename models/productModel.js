const mongoose = require('mongoose');

const CompanyPrice = new mongoose.Schema({
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
  },
  price: {
    type: Number,
  }
});

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  shortDis:{ 
    type: String,
    required: true
  },
  stock:{
    type: Number,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Brand',
    required: true
  },
  standardPrice: {
    type: Number,
    required: true
  },
  priceByCompany: {
    type: [CompanyPrice],
    required: true
  },
  additionalInfo: {
    type: [String],
    required: true
  },
  sku: {
    type: [String],
    required: true
  },
  tag: {
    type: [String]
  },
  images: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductImage'
  }
});

module.exports = mongoose.model('Product', productSchema);
