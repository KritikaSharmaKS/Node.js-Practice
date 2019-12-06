const express = require('express');

const router = express.Router();

router.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><br><button type="submit">SEND</button></form>')
    //next(); //allows the request to go thru the next middleware
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});


module.exports = router;