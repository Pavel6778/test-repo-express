const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { Cart, Product } = require('../models');

/**
 * Get cart by userId
 * @param {ObjectId} userId
 * @returns {Promise<Cart>}
 */
const getCartByUserId = async (userId) => {
  return Cart.findOne({ userId });
};

/**
 * Add product to cart
 * @param {ObjectId} productId
 * @param {ObjectId} userId
 * @returns {Promise<Cart>}
 */
const addProductToCart = async (productId, userId) => {
  const product = await Product.findById(productId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }

  let cart = await getCartByUserId(userId);

  if (!cart) {
    cart = Cart.create({ products: [], userId });
  }

  cart.products.push(product);

  await cart.save();

  return cart;
};

/**
 * Remove product from cart
 * @param {ObjectId} productId
 * @param {ObjectId} userId
 * @returns {Promise}
 */
const removeProductFromCart = async (productId, userId) => {
  const cart = await getCartByUserId(userId);

  if (!cart) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Cart not found');
  }

  const product = Product.findById(productId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }

  // TODO finish remove implementation
};

module.exports = {
  getCartByUserId,
  addProductToCart,
  removeProductFromCart,
};
