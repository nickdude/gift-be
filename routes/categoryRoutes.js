const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');
const uploadMiddleware = require('../middleware/uploadMiddleware');

router.post('/', authMiddleware.authenticateToken, adminMiddleware.verifyAdmin, uploadMiddleware.single('image'), categoryController.createCategory);
router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);
router.put('/:id', authMiddleware.authenticateToken, adminMiddleware.verifyAdmin, uploadMiddleware.single('image'), categoryController.updateCategory);
router.delete('/:id', authMiddleware.authenticateToken, adminMiddleware.verifyAdmin, categoryController.deleteCategory);

module.exports = router;
