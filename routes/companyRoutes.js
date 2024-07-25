const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

router.post('/', authMiddleware.authenticateToken, adminMiddleware.verifyAdmin, companyController.createCompany);
router.get('/', companyController.getAllCompanies);
router.get('/:id', companyController.getCompanyById);
router.put('/:id', authMiddleware.authenticateToken, adminMiddleware.verifyAdmin, companyController.updateCompany);
router.delete('/:id', authMiddleware.authenticateToken, adminMiddleware.verifyAdmin, companyController.deleteCompany);

module.exports = router;
