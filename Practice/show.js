// let http = require('http'); 
// http.createServer(function (req, res) {
// //   res.writeHead(200, {'Content-Type': 'text/plain'});
// //   res.end('<h2>Hello World!</h2>');
//   res.writeHead(200, {'Content-Type': 'text/html'}); // tell browser this is HTML
//   res.end(`
//     <html>
//       <head><title>My Page</title></head>
//       <body style="background:#222; color:#fff; font-family:sans-serif;">
//         <h1>Hello World!</h1>
//         <p>This is HTML content served with Node.js http module </p>
//       </body>
//     </html>
//   `);
// }).listen(8080);

// const os = require('os');
// console.log(os.platform());
// console.log(os.arch());

const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('<h2>Hello World!</h2>'));
app.listen(8080);
