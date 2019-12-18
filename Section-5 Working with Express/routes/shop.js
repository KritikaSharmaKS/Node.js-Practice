const express = require('express');
const path = require('path');

const rootDirName = require('../util/path');

const router = express.Router();

const adminData = require('./admin');

router.get('/', (req, res, next) => {
   console.log("shop.js" , adminData.products);
   res.sendFile(path.join(rootDirName, 'views', 'shop.html'));
});


module.exports = router;