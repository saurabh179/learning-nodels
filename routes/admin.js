const path = require('path');

const express = require('express');

const root_dir = require('../util/path.js');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    // rendering static file in response
    // res.sendFile(path.join(root_dir, 'views', 'add-product.html'));

    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
      });
});

router.post('/product', (req, res, next) => {
    products.push({'title' : req.body.title})
    res.redirect('/');
});


//so that this can be imported in diff js files
exports.routes = router;
exports.products = products;