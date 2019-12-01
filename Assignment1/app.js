const http = require('http');

const server = http.createServer((req, res) => {
    console.log("Server Started!!!!!!!");
    const url = req.url;
    if (url == "/") {
        res.write('<html>');
        res.write('<head><title>Welcome</title></head>');
        res.write('<h1>WELCOME TO MY HOUSE!!!</h1>');
        res.write('</html>');
    } else if (url == "/users") {

    }
    console.log(url);

});

server.listen(3000);
