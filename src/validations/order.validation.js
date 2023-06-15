const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createOrder = {
  body: Joi.object()
    .keys({
      shipping: Joi.object()
        .keys({
          address: Joi.string().required(),
        })
        .min(1),
    })
    .min(1),
};

const checkoutOrder = {
  params: Joi.object().keys({
    orderId: Joi.string().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      paymentInfo: Joi.object()
        .keys({
          method: Joi.string().required(),
          transactionId: Joi.string().required(),
        })
        .min(2),
    })
    .min(1),
};

module.exports = {
  createOrder,
  checkoutOrder,
};
