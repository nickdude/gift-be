const adminRoutes = require('./adminRoutes');
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes')
const brandRoutes = require('./brandRoutes')
const productRoutes =  require('./productRoutes')
const productImageRoutes = require('./productImageRoutes')
const companyRoutes = require('./companyRoutes')
const orderRoutes = require('./orderRoutes')

const express = require('express');
const router = express.Router();

router.use('/admin', adminRoutes);
router.use('/user', userRoutes);
router.use('/category', categoryRoutes);
router.use('/brand', brandRoutes);
router.use('/product', productRoutes);
router.use('/product-image', productImageRoutes);
router.use('/company', companyRoutes);
router.use('/order', orderRoutes);

module.exports = router
