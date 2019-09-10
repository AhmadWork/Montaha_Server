const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../config/passport')(passport);
const ProductController = require('../controllers/ProductController');
router
  .route('/')
  /** GET /api/products - Get list of products */
  .get(ProductController.list)

  /** POST /api/products - Create new product */
  .post(
    passport.authenticate('jwt', { session: false}),
    ProductController.create
  );

router
  .route('/:productId')
  /** GET /api/products/:productId - Get product */
  .get(ProductController.get)

  /** PUT /api/products/:productId - Update product */
  .put(
    passport.authenticate('jwt', { session: false}),
    ProductController.update
  )
  // const checkScopes = jwtAuthz([ 'delete:products' ]);
  /** DELETE /api/products/:productId - Delete product */
  .delete( passport.authenticate('jwt', { session: false}), ProductController.remove);

/** Load user when API with productId route parameter is hit */
router.param('productId', ProductController.load);
module.exports = router;
