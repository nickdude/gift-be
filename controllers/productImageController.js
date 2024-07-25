const productImageService = require('../services/productImageService');

exports.createProductImage = async (req, res) => {
  try {
    const imageData = {
      featuredImage: req.files['featuredImage'][0].path,
      galleryImages: req.files['galleryImages'] ? req.files['galleryImages'].map(file => file.path) : [],
    };
    const productImage = await productImageService.createProductImage(imageData);
    res.status(201).json(productImage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getProductImageById = async (req, res) => {
  try {
    const productImage = await productImageService.getProductImageById(req.params.id);
    res.status(200).json(productImage);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.updateProductImage = async (req, res) => {
  try {
    const imageData = {
      featuredImage: req.files['featuredImage'] ? req.files['featuredImage'][0].path : req.body.featuredImage,
      galleryImages: req.files['galleryImages'] ? req.files['galleryImages'].map(file => file.path) : req.body.galleryImages,
    };
    const productImage = await productImageService.updateProductImage(req.params.id, imageData);
    res.status(200).json(productImage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteProductImage = async (req, res) => {
  try {
    const productImage = await productImageService.deleteProductImage(req.params.id);
    if(productImage){
        res.status(200).json(productImage);
    }else{
        res.status(204).send();
    }
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
