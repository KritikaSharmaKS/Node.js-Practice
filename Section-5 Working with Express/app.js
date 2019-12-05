const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('This always runs!');
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log("In the 1st Middleware!");
    res.send('<h1>Add Product Page!!!</h1>')
    //next(); //allows the request to go thru the next middleware
});

app.use('/', (req, res, next) => {
    console.log("In the 2nd Middleware!");
    //... return a response if next is not called
    res.send('<h1>Hello from Express!!!</h1>'); //Header already set
});

app.listen(3005);
