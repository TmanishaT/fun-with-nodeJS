const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {prods: products, docTitle: 'Shop', path: '/', pageTitle: 'Shop',
   hasProds:products.length >0 , activeShop : true, productCss: true});
});

module.exports = router;
