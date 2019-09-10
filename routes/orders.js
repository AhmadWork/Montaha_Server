const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');
const passport = require('passport');
require('../config/passport')(passport);
// const validate = require('express-validation');
// const config = require('../config/index');
// const paramValidation = require('../config/param-validation');

router.get('/', passport.authenticate('jwt', { session: false}),OrderController.list);
router.post('/create', passport.authenticate('jwt', { session: false}),OrderController.placeOrder);
router.get('/:orderId', passport.authenticate('jwt', { session: false}),OrderController.get);
router.param('orderId', passport.authenticate('jwt', { session: false}),OrderController.load);
module.exports = router;

// config.jwtMiddleware,
// validate(paramValidation.createOrder),
// const temp1 = {
//   billingAddress: {
//     name: 'ldfjdlsjf',
//     email: 'flsdjf@lsjf.com',
//     postCode: '2321',
//     district: 'Sherpur',
//     country: 'BD'
//   },
//   shippingMethod: 'ups',
//   paymentMethod: 'skrill'
// };
