const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { orderService } = require('../services');

const getOrders = catchAsync(async (req, res) => {
  const orders = await orderService.getOrdersByUserId(req.user._id);

  res.send(orders);
});

const checkoutOrder = catchAsync(async (req, res) => {
  const order = await orderService.checkoutOrder(req.params.orderId, req.body);

  res.send(order);
});

const createOrder = catchAsync(async (req, res) => {
  const order = await orderService.createOrder(req.user._id, req.body);

  res.status(httpStatus.CREATED).send(order);
});

module.exports = {
  getOrders,
  checkoutOrder,
  createOrder,
};
