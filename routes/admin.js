const path = require('path');

const express = require('express');

const root_dir = require('../util/path.js');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(root_dir, 'views', 'add-product.html'));
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});


//so that this can be imported in diff js files
module.exports = router;