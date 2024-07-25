const express = require('express');
const router = express.Router();
const brandController = require('../controllers/brandController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');
const uploadMiddleware = require('../middleware/uploadMiddleware');

router.post('/', authMiddleware.authenticateToken, adminMiddleware.verifyAdmin, uploadMiddleware.single('image'), brandController.createBrand);
router.get('/', brandController.getAllBrands);
router.get('/:id', brandController.getBrandById);
router.put('/:id', authMiddleware.authenticateToken, adminMiddleware.verifyAdmin, uploadMiddleware.single('image'), brandController.updateBrand);
router.delete('/:id', authMiddleware.authenticateToken, adminMiddleware.verifyAdmin, brandController.deleteBrand);

module.exports = router;
