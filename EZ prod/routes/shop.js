const path = require('path');

const express = require('express');

const productContoller= require('../controllers/products.js');

const router = express.Router();

router.get('/', productContoller.getProducts);

module.exports = router;
