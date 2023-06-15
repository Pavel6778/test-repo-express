const Joi = require('joi');
const { objectId } = require('./custom.validation');

const getProducts = {
  query: Joi.object().keys({
    name: Joi.string(),
    price: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getProductById = {
  params: Joi.object().keys({
    productId: Joi.string().custom(objectId),
  }),
};

const createProduct = {
  body: Joi.object().keys({
    price: Joi.number().required(),
    description: Joi.string(),
    name: Joi.string().required(),
  }),
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
};
