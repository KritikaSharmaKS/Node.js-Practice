const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({msExtendedCode: false}));

// app.use('/', (req, res, next) => {
//     console.log('This always runs!');
//     next();
// });

app.use(adminRoutes);

app.use(shopRoutes);

app.listen(3005);
