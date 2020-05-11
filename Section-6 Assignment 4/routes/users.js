const express = require('express');

const router = express.Router();

const usernameArray = require('./default').usernameArray;

router.get('/users', (req, res, next) => {
    res.render('users', {pageTitle: 'Users', path: '/users', usernameArray });
});

module.exports = router;