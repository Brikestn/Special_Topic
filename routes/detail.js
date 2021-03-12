const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const productdata = require('../database/product');
const router = express.Router();

router.get('/detail', (req, res) => {
  const product_id = req.query.product_id;
  
  console.log(product_id);   
  product = productdata.product.find(o =>o.product_id === product_id);
  console.log(product);

  res.render('detail', {
    prods: product,
    pageTitle: 'detail',
    path: '/',
    activeShop: true,
    productCSS: true
  });
});

module.exports = router;