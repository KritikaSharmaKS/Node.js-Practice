const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    //... return a response if next is not called
    res.send('<h1>Hello from Express!!!</h1>'); //Header already set
});

module.exports = router;