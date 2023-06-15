const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const orderValidation = require('../../validations/order.validation');
const orderController = require('../../controllers/order.controller');

const router = express.Router();

router.route('/').get(auth(), orderController.getOrders);
router.route('/').post(auth(), validate(orderValidation.createOrder), orderController.createOrder);
router.route('/:orderId/checkout').post(auth(), validate(orderValidation.checkoutOrder), orderController.checkoutOrder);

module.exports = router;
