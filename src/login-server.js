const fs = require('fs');
const path = require('path');
const http = require('http');

const PORT = 5000;

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/login') {
    try {
      const loginPath = path.join(__dirname, 'login.html');
      const loginContent = fs.readFileSync(loginPath, 'utf8');
      
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(loginContent);
    } catch (error) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Login page not found');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`SOULVET Login server running on http://0.0.0.0:${PORT}`);
});