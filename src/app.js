const http = require('http');
const version = process.env.APP_VERSION || '1.0.0';
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello from Version ${version}\n`);
});
server.listen(3000, '0.0.0.0', () => {
  console.log(`Server running at 3000. Version: ${version}`);
});
