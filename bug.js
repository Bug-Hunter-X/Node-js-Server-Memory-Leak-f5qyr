const http = require('http');

const server = http.createServer((req, res) => {
  // Keep the connection open indefinitely
  // This will cause memory leaks and eventually crash the server
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});