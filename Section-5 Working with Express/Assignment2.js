const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    res.send('<h1>Users Page!!!</h1>');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Default Page!!!</h1>');
});

// app.use((req, res, next) => {
//     console.log('Assignment 2 First Middleware');
//     next();
// });
//
// app.use((req, res, next) => {
//     res.send('<h1>Assignment 2 using Express JS</h1>');
// });

app.listen(3006);