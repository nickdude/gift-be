const brandService = require('../services/brandService');

exports.createBrand = async (req, res) => {
  try {
    const brandData = {
      name: req.body.name,
      image: req.file.path
    };
    const brand = await brandService.createBrand(brandData);
    res.status(201).json(brand);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllBrands = async (req, res) => {
  try {
    const brands = await brandService.getAllBrands();
    res.status(200).json(brands);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBrandById = async (req, res) => {
  try {
    const brand = await brandService.getBrandById(req.params.id);
    res.status(200).json(brand);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.updateBrand = async (req, res) => {
  try {
    const brandData = {
      name: req.body.name,
      image: req.file ? req.file.path : req.body.image
    };
    const brand = await brandService.updateBrand(req.params.id, brandData);
    res.status(200).json(brand);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteBrand = async (req, res) => {
  try {
    const brand = await brandService.deleteBrand(req.params.id);
    if(brand){
        res.status(200).json(brand);
    }else{
        res.status(204).send();
    }
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
