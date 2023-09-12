const path = require('path');

const express = require('express');

const root_dir = require('../util/path.js');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(root_dir, 'views', 'shop.html'));
});

module.exports = router;