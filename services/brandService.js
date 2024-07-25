const Brand = require('../models/brandModel');

exports.createBrand = async (brandData) => {
  const brand = new Brand(brandData);
  return await brand.save();
};

exports.getAllBrands = async () => {
  return await Brand.find();
};

exports.getBrandById = async (id) => {
  return await Brand.findById(id);
};

exports.updateBrand = async (id, brandData) => {
  return await Brand.findByIdAndUpdate(id, brandData, { new: true });
};

exports.deleteBrand = async (id) => {
  return await Brand.findByIdAndDelete(id);
};
