const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

router.post('/', authMiddleware.authenticateToken, adminMiddleware.verifyAdmin, productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.put('/:id', authMiddleware.authenticateToken, adminMiddleware.verifyAdmin, productController.updateProduct);
router.delete('/:id', authMiddleware.authenticateToken, adminMiddleware.verifyAdmin, productController.deleteProduct);

module.exports = router;
