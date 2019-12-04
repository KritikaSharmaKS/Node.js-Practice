const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("In the Middleware!");
    next(); //allows the request to go thru the next middleware
});

app.use((req, res, next) => {
    console.log("In the 2nd Middleware!");
    //... return a response if next is not called
});

const server = http.createServer(app);

server.listen(3005);