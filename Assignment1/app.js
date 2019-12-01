const http = require('http');

const server = http.createServer((req, res) => {
    console.log("Server Started!!!!!!!");
    const url = req.url;
    if (url == "/") {
        res.write('<html>');
        res.write('<head><title>Welcome</title></head>');
        res.write('<h1>WELCOME TO MY HOUSE!!!</h1>');
        res.write('<form method="post">Username: <input type="text"><br><button>Send</button></form>');
        res.write('</html>');
        res.end();
    } else if (url == "/users") {
        res.write('<html>');
        res.write('<head><title>List of Users</title></head>');
        res.write('<h1>Give it up for all our guests : </h1>');
        res.write('<ul><li>Ross</li><li>Rachel</li><li>Monica</li><li>Phoebe</li><li>Joey</li><li>Chandler</li></ul>');
        res.write('</html>');
        res.end();
    }
});

server.listen(3000);
