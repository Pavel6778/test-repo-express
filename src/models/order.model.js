const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
const { orderStatuses } = require('../constants/order');

const orderSchema = mongoose.Schema(
  {
    status: {
      type: String,
      enum: Object.values(orderStatuses),
      default: orderStatuses.PENDING,
    },
    products: [{ type: mongoose.Schema.ObjectId, ref: 'Product', default: undefined }],
    paymentInfo: {
      method: String,
      transactionId: String,
    },
    shipping: {
      address: String,
    },
    userId: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
orderSchema.plugin(toJSON);

/**
 * @typedef Order
 */
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
