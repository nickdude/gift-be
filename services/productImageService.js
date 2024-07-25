const ProductImage = require('../models/productImageModel');

exports.createProductImage = async (imageData) => {
  const productImage = new ProductImage(imageData);
  return await productImage.save();
};

exports.getProductImageById = async (id) => {
  return await ProductImage.findById(id);
};

exports.updateProductImage = async (id, imageData) => {
  return await ProductImage.findByIdAndUpdate(id, imageData, { new: true });
};

exports.deleteProductImage = async (id) => {
  return await ProductImage.findByIdAndDelete(id);
};
