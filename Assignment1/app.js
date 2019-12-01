const http = require('http');

const server = http.createServer((req, res) => {
    console.log("Server Started!!!!!!!");
    const url = req.url;
    console.log();

});

server.listen(3000);
