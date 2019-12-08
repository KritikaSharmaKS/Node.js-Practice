const express = require('express');
const path = require('path');

const rootDirName = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
   res.sendFile(path.join(rootDirName, 'views', 'shop.html'));
});

module.exports = router;