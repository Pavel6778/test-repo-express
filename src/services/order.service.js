const httpStatus = require('http-status');
const { Order, Cart } = require('../models');
const ApiError = require('../utils/ApiError');
const { orderStatuses } = require('../constants/order');

/**
 * Get orders by userId
 * @param {ObjectId} userId
 * @returns {Promise<Order[]>}
 */
const getOrdersByUserId = async (userId) => {
  return Order.find({ userId });
};

/**
 * Create order
 * @param {ObjectId} userId
 * @param {Object} orderBody
 * @returns {Promise<Order>}
 */
const createOrder = async (userId, orderBody) => {
  const cart = await Cart.findOne({ userId });
  const newOrder = Order.create({ userId, products: cart.products, ...orderBody });

  cart.products = [];
  await cart.save();

  return newOrder;
};

/**
 * Checkout order
 * @param {ObjectId} orderId
 * @param {Object} orderBody
 * @returns {Promise<Order>}
 */
const checkoutOrder = async (orderId, orderBody) => {
  const order = await Order.findOne({ _id: orderId });

  if (!order) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Order not found');
  }

  Object.assign(order, { ...orderBody, status: orderStatuses.PAID });
  await order.save();

  return order;
};

module.exports = {
  createOrder,
  checkoutOrder,
  getOrdersByUserId,
};
