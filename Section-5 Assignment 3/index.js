const express = require('express');

const path = require('path');

const app = express();

app.use('/users', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'users.html'));
});

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'default.html'));
});

app.listen(3006);