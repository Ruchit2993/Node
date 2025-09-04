// const http = require('http');
// // Start the server first
// const server = http.createServer((req, res) => {
//     if (req.method === 'GET') {
//         let body = '';
//         req.on('data', (chunk) => {
//             body += chunk.toString();
//         });
//         // res.setHeader('body', body)
//         req.on('end', () => {
//             res.writeHead(200, { 'Content-Type': 'application/json' });
//             res.end(JSON.stringify({
//                 message: 'Server received request',
//                 method: req.method,
//                 url: req.url,
//                 body : body
//                 // body: body ? JSON.parse(body) : {}
//             }));
//         });
//     }
// });
// server.listen(8081, () => {
//     console.log('✅ Server running at http://localhost:8081');
//     // Once server is ready, fire the client request
//     const options = {
//         hostname: 'localhost',
//         port: 8081,
//         path: '/',
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     };
//     const req = http.request(options, (res) => {
//         let data = '';
//         res.on('data', (chunk) => {
//             data += chunk.toString();
//         });
//         res.on('end', () => console.log('Response from server:', data));
//     });
//     // Send body in GET (non-standard)
//     req.write(JSON.stringify({ name: 'Ruchit', age: 22 }));
//     req.end();
// });



const http = require('http');
const url = require('url');

// Start the server
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    // Parse query params
    const query = url.parse(req.url, true).query;

    let body = '';
    req.on('data', chunk => body += chunk);

    // ✅ Always fire on 'end', even if body is empty
    req.on('end', () => {
      let parsedBody = {};
      try {
        parsedBody = body ? JSON.parse(body) : {};
      } catch (err) {
        parsedBody = { error: "Invalid JSON" };
      }

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        message: 'Server received request',
        method: req.method,
        url: req.url,
        query: query,       // browser data
        body: parsedBody    // node client body
      }));
    });
  }
});

server.listen(8081, () => {
  console.log('✅ Server running at http://localhost:8081');

  // Fire a Node client request for testing
  const options = {
    hostname: 'localhost',
    port: 8081,
    path: '/',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const req = http.request(options, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log('Response from server (Node client):', data || '[empty response]');
    });
  });

  // Send body in GET (non-standard, but allowed in Node client)
  req.write(JSON.stringify({ name: 'Ruchit', age: 22 }));
  req.end();
});






// const http = require('http');
// const url = require('url');

// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url, true);
//   const parts = parsedUrl.pathname.split('/'); // split path

//   // Case 1: Handle URL params (e.g., /user/101/John/25)
//   if (parts[1] === 'user') {
//     const data = {
//       id: parts[2],
//       name: parts[3],
//       age: parts[4]
//     };

//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(data));
//     return;
//   }

//   // Case 2: Handle query params (e.g., /search?id=101&name=John&age=25)
//   if (parsedUrl.pathname === '/search') {
//     const data = {
//       id: parsedUrl.query.id,
//       name: parsedUrl.query.name,
//       age: parsedUrl.query.age
//     };

//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(data));
//     return;
//   }

//   // Default case
//   res.writeHead(404, { 'Content-Type': 'text/plain' });
//   res.end('Not Found');
// });

// server.listen(3000, () => {
//   console.log('Server running on port 3000');
// });
