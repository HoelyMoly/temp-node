import http from 'http';

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.end('Welcome to our home page');
      break;
    case '/about':
      res.end('About');
      break;
    default:
      res.end('404 page not found');
  }
});

server.listen(5000, () => {
  console.log('Server running on port 5000...');
});
