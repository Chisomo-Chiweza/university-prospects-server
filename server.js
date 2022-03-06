const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((request, resource) => {
    resource.statusCode = 200;
    resource.setHeader('Content-Type', 'text/plain');
    resource.end('University Prospects Server')
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});
