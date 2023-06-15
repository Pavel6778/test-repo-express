const catchAsync = require('../utils/catchAsync');
const { cartService } = require('../services');

const addToCart = catchAsync(async (req, res) => {
  const cart = await cartService.addProductToCart(req.params.productId, req.user._id);

  res.send(cart);
});

const getCart = catchAsync(async (req, res) => {
  const cart = await cartService.getCartByUserId(req.user._id);

  res.send(cart);
});

module.exports = {
  addToCart,
  getCart,
};
