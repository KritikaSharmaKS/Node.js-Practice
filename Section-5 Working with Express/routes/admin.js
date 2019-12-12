const express = require('express');
const path = require('path');

const rootDirName = require('../util/path');

const router = express.Router();

const productArray = [];

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDirName, 'views', 'add-product.html'));
    //next(); //allows the request to go thru the next middleware
});

router.post('/add-product', (req, res, next) => {
    productArray.push({ title: req.body.title });
    res.redirect('/');
});


exports.routes = router;
exports.products = productArray;