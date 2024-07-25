const mongoose = require('mongoose');

const productImageSchema = new mongoose.Schema({
  featuredImage: {
    type: String,
    required: true
  },
  galleryImages: {
    type: [String]
  },
});

module.exports = mongoose.model('ProductImage', productImageSchema);
