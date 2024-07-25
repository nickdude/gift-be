const productService = require('../services/productService');

exports.createProduct = async (req, res) => {
  try {
    const productData = {
      name: req.body.name,
      shortDis: req.body.shortDis,
      category: req.body.category,
      brand: req.body.brand,
      standardPrice: req.body.standardPrice,
      priceByCompany: req.body.priceByCompany,
      additionalInfo: req.body.additionalInfo,
      sku: req.body.sku,
      tag: req.body.tag,
      images: req.body.images
    };
    const product = await productService.createProduct(productData);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const productData = {
      name: req.body.name,
      shortDis: req.body.shortDis,
      category: req.body.category,
      brand: req.body.brand,
      standardPrice: req.body.standardPrice,
      priceByCompany: req.body.priceByCompany,
      additionalInfo: req.body.additionalInfo,
      sku: req.body.sku,
      tag: req.body.tag,
      images: req.body.images
    };
    const product = await productService.updateProduct(req.params.id, productData);
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await productService.deleteProduct(req.params.id);
    if(product){
        res.status(200).json(product);
    }else{
        res.status(204).send();
    }
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
