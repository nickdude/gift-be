const categoryService = require('../services/categoryService');

exports.createCategory = async (req, res) => {
  try {
    const categoryData = {
      name: req.body.name,
      image: req.file.path
    };
    const category = await categoryService.createCategory(categoryData);
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await categoryService.getAllCategories();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const category = await categoryService.getCategoryById(req.params.id);
    res.status(200).json(category);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const categoryData = {
      name: req.body.name,
      image: req.file ? req.file.path : req.body.image
    };
    const category = await categoryService.updateCategory(req.params.id, categoryData);
    res.status(200).json(category);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const category = await categoryService.deleteCategory(req.params.id);
    if(category){
        res.status(200).json(category);
    }else{
        res.status(204).json(category);
    }
   
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
