const path = require('path');

const express = require('express');

const root_dir = require('../util/path.js');
const adminData = require('./admin.js');

const router = express.Router();

router.get('/', (req, res, next) => {
    //sharing data from one file to another
    // console.log(adminData.products);
    // res.sendFile(path.join(root_dir, 'views', 'shop.html'));

    //rendering pug dynamic html file
    const products = adminData.products;
    res.render('shop', {prods: products, pageTitle: "Shop", path: '/'});
});

module.exports = router;