const http = require('http');
const fs = require('fs');

const home = fs.readFileSync('./index.html');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    return res.end(home);
  }
  if (req.url === '/contact') {
    return res.end('<h1>Contact Page...</h1>');
  }
  if (req.url === '/services') {
    return res.end('<h1>Services Page...</h1>');
  }
  if (req.url === '/about') {
    return res.end('<h1>About Page...</h1>');
  } else {
    return res.end('<h1>404</h1>');
  }
});

const port = 2000;
const hostName = 'localhost';

server.listen(port, hostName, () => {
  console.log(`Server start working on http://${hostName}:${port}`);
});

console.log(__dirname);
console.log(__filename);
