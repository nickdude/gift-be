const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');


 router.post('/', authMiddleware.authenticateToken, orderController.createOrder);
 router.get('/', orderController.getAllOrders);
 router.get('/:id', orderController.getOrderById);
 //router.put('/:id', authMiddleware.authenticateToken, adminMiddleware.verifyAdmin, orderController.updateOrder);
 router.delete('/:id', authMiddleware.authenticateToken, adminMiddleware.verifyAdmin, orderController.deleteOrder);

module.exports = router;
