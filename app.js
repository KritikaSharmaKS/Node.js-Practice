const http = require('http');


console.log("Starting Main Server.............");

const server = http.createServer((req, res) => {
    console.log("Hey, I am in the Server!!!");
});

server.listen(3000);