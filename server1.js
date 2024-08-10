const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 1000;

const server = http.createServer((req, res) => {
    // Serve the index.html file for GET requests to root
    if (req.method === 'GET' && req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } 
    // Handle POST requests to /post
    else if (req.method === 'POST' && req.url === '/post') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('The form was submitted successfully.');
    } 
    // Handle other requests
    else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Error: Method Not Allowed');
    }
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
