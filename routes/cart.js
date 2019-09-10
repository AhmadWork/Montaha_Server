const express = require('express');
const router = express.Router();
const CartController = require('../controllers/CartController');
// const validate = require('express-validation');
// const config = require('../config/index');
// const paramValidation = require('../config/param-validation');
const passport = require('passport');
require('../config/passport')(passport);
router.get('/', passport.authenticate('jwt', { session: false}),CartController.get);
router.post('/add', passport.authenticate('jwt', { session: false}),CartController.add);
router.post('/subtract', passport.authenticate('jwt', { session: false}),CartController.subtract);
module.exports = router;
