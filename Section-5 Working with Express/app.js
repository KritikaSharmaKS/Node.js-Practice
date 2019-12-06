const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({msExtendedCode: false}));

// app.use('/', (req, res, next) => {
//     console.log('This always runs!');
//     next();
// });

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><br><button type="submit">SEND</button></form>')
    //next(); //allows the request to go thru the next middleware
});

app.use('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
    //... return a response if next is not called
    res.send('<h1>Hello from Express!!!</h1>'); //Header already set
});

app.listen(3005);
