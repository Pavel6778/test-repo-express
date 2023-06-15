const Joi = require('joi');
const { objectId } = require('./custom.validation');

const addToCart = {
  params: Joi.object().keys({
    productId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  addToCart,
};
