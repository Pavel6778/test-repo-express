const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { productService } = require('../services');
const pick = require('../utils/pick');

const getProducts = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'price']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);

  const result = await productService.queryProducts(filter, options);

  res.send(result);
});

const getProductById = catchAsync(async (req, res) => {
  const result = await productService.getProductById(req.params.productId);

  res.send(result);
});

const createProduct = catchAsync(async (req, res) => {
  const product = await productService.createProduct(req.body, req.user._id);

  res.status(httpStatus.CREATED).send(product);
});

// TODO implement patch and delete

module.exports = {
  getProducts,
  getProductById,
  createProduct,
};
