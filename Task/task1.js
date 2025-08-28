const fs = require('fs');

const {addFun , subFun} = require('./math')

console.log(addFun(2,3))





// {
// // // Create a readable stream
// // const readStream = fs.createReadStream('./sample.txt', 'utf8');

// // // Event listeners
// // readStream.on('data', (chunk) => {
// //   console.log(chunk); // part of file
// // });

// // readStream.on('end', () => {
// //   console.log('File reading completed!');
// // });

// // readStream.on('error', (err) => {
// //   console.error('Error:', err);
// // });

// // const writeStream = fs.createWriteStream('./output.txt');

// // // Writing in chunks
// // writeStream.write('Hello ');
// // writeStream.write('Stream!');
// // writeStream.end();

// // writeStream.on('finish', () => {
// //   console.log('Writing completed!');
// // });

// // const readStream = fs.createReadStream('./sample.txt');
// // const writeStream = fs.createWriteStream('copy.txt');

// // Pipe = directly transfer data
// // readStream.pipe(writeStream);

// // console.log('File copy started...');
// }
