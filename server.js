const http = require('http');
const { handleRequest } = require('./app');

const server = http.createServer(handleRequest);

server.listen(80, () => {
  console.log('Server is running on port 80');
});
