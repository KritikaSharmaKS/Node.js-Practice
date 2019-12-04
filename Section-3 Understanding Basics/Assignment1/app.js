const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const requestMethod = req.method;
    if (url === "/") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Welcome</title></head>');
        res.write('<h1>WELCOME TO MY HOUSE!!!</h1>');
        res.write('<body><form action="/create-user" method="POST">Username: <input type="text" name="username"><br><br><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === "/users") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>List of Users</title></head>');
        res.write('<body><h1>Give it up for all our guests : </h1>');
        res.write('<ul><li>Ross</li><li>Rachel</li><li>Monica</li><li>Phoebe</li><li>Joey</li><li>Chandler</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === "/create-user" && requestMethod === "POST") {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
});

server.listen(3004);
