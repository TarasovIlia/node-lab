const http = require('http');

const server = http.createServer(
    (req,res) => {
        const name = Array.from(req.url.slice(1)).reverse().join('').toLocaleLowerCase()
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.end(`<h2>Hello ${name}<h2/>`);
    }
);

server.listen(8080, 'localhost')