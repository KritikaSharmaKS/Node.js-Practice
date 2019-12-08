const express = require('express');
const path = require('path');

const router = express.Router();

const rootDirName = require('../util/path');

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDirName, 'views', 'add-product.html'));
    //next(); //allows the request to go thru the next middleware
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});


module.exports = router;