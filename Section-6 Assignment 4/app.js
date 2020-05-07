const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');

const defaultRoute = require('./routes/default');
const usersRoute = require('./routes/users');

const app = express();

//app.set('view engine', 'pug');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRoute);
app.use(defaultRoute.router);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: "404", path:''});
});

app.listen(3007);
