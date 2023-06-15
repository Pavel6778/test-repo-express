const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const cartValidation = require('../../validations/cart.validation');
const cartController = require('../../controllers/cart.controller');

const router = express.Router();

router.route('/').get(auth(), cartController.getCart);
router.route('/:productId').post(auth(), validate(cartValidation.addToCart), cartController.addToCart);

module.exports = router;
