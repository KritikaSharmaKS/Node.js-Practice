const express = require('express');

const router = express.Router();

const usernameArray = [];

router.get('/', (req, res, next) => {
   res.render('default', {pageTitle: 'Welcome', path: '/'});
});

router.post('/', (req, res, next) => {
    usernameArray.push({ title : req.body.title });
    res.redirect('/users');
 });

module.exports = {router , usernameArray};