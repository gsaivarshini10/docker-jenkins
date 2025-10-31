const http = require('http');
const PORT = process.env.PORT || 8083;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from project1 Docker container!\n');
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


