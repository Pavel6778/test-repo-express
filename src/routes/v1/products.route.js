const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const productValidation = require('../../validations/product.validation');
const productController = require('../../controllers/products.controller');

const router = express.Router();

router.route('/').get(auth(), validate(productValidation.getProducts), productController.getProducts);
router.route('/').post(auth(), validate(productValidation.createProduct), productController.createProduct);
router.route('/:productId').get(auth(), validate(productValidation.getProductById), productController.getProductById);

module.exports = router;
