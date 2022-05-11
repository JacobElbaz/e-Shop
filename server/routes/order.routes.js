const router = require('express').Router();
const orderController = require('../controllers/order.controller');

router.post('/', orderController.createOrder);
router.get('/', orderController.getOrders);
router.get('/:id/myorders', orderController.getMyOrders);
router.put('/:id', orderController.updateStatus);

module.exports =router;