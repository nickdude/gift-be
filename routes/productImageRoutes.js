const express = require('express');
const router = express.Router();
const productImageController = require('../controllers/productImageController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');
const uploadMiddleware = require('../middleware/uploadMiddleware');

const upload = uploadMiddleware.fields([
  { name: 'featuredImage', maxCount: 1 },
  { name: 'galleryImages', maxCount: 10 }
]);

router.post('/', authMiddleware.authenticateToken, adminMiddleware.verifyAdmin, upload, productImageController.createProductImage);
router.get('/:id', productImageController.getProductImageById);
router.put('/:id', authMiddleware.authenticateToken, adminMiddleware.verifyAdmin, upload, productImageController.updateProductImage);
router.delete('/:id', authMiddleware.authenticateToken, adminMiddleware.verifyAdmin, productImageController.deleteProductImage);

module.exports = router;
