const http = require('http');

const server = http.createServer((req, res) => {
    console.log("Server Started!!!!!!!");
    const url = req.url;
    const requestMethod = req.method;
    if (url === "/") {
        res.write('<html>');
        res.write('<head><title>Welcome</title></head>');
        res.write('<h1>WELCOME TO MY HOUSE!!!</h1>');
        res.write('<body><form action="/create-user" method="POST">Username: <input type="text"><br><br><button>Send</button></form></body>');
        res.write('</html>');
        res.statusCode = 302;
        res.setHeader('Location','/create-user');
        res.end();
    }
    if (url === "/users") {
        res.write('<html>');
        res.write('<head><title>List of Users</title></head>');
        res.write('<h1>Give it up for all our guests : </h1>');
        res.write('<ul><li>Ross</li><li>Rachel</li><li>Monica</li><li>Phoebe</li><li>Joey</li><li>Chandler</li></ul>');
        res.write('</html>');
        res.end();
    }
    if (url === "/create-user" && requestMethod === "POST"){
        console.log(req.data.toString());
    }
});

server.listen(3001);
