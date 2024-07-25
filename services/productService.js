const Product = require('../models/productModel');

exports.createProduct = async (productData) => {
  const product = new Product(productData);
  return await product.save();
};

// exports.getAllProducts = async () => {
//   return await Product.find().populate('category').populate('brand').populate('images');
// };
exports.getAllProducts = async () => {
  return await Product.find()
    .populate('category')
    .populate('brand')
    .populate('images')
    .populate({
      path: 'priceByCompany.companyId',
      model: 'Company'
    });
};


exports.getProductById = async (id) => {
  return await Product.findById(id).populate('category').populate('brand').populate('images');
};

exports.updateProduct = async (id, productData) => {
  return await Product.findByIdAndUpdate(id, productData, { new: true }).populate('category').populate('brand').populate('images');
};

exports.deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};
