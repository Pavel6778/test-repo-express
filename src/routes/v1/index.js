const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const cartRoute = require('./cart.route');
const orderRoute = require('./order.route');
const productRoute = require('./products.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/cart',
    route: cartRoute,
  },
  {
    path: '/products',
    route: productRoute,
  },
  {
    path: '/orders',
    route: orderRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
