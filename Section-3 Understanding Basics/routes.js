const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><br><button type="submit">Send</button></input></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/message' && method === 'POST'){
        let body='';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        return req.on('end', () => {
            const message = body.split('=')[1];
            console.log(message);
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Welcome!</title></head>');
    res.write('<body><h1>Hello From my Node.js Server</h1></body>');
    res.write('</html>');
    res.end();
};

//module.exports = requestHandler;

module.exports = {
    handler: requestHandler,
    text: "some hard coded text"
};
