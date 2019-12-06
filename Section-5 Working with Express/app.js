const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({msExtendedCode: false}));

// app.use('/', (req, res, next) => {
//     console.log('This always runs!');
//     next();
// });



app.use('/', (req, res, next) => {
    //... return a response if next is not called
    res.send('<h1>Hello from Express!!!</h1>'); //Header already set
});

app.listen(3005);
