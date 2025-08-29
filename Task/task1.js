
// const {addFun , subFun} = require('./math')
// console.log(addFun(2,3));
// console.log(subFun(10,11));

const { error } = require('console');

// const math = require('./math')
// console.log(math.addFun(2,3));
// console.log(math.subFun(10,11));

// const fs = require('fs');
// const read = fs.readFileSync('./sample.txt');
// console.log(read)
// console.log(read.toString())


const fs = require('fs').promises;
async function readFile() {
  try {
    const data = await fs.readFile('./sample2.txt');
    console.log(data);
    console.log(data.toString());
  } 
  catch (error) {
   console.error('Error reading file:', error.message);
   throw error;
  }
}
// readFile();
readFile().catch(error=>{
    console.log('out side catch',error.message);
});




// {
// // Create a readable stream
// const readStream = fs.createReadStream('./sample.txt', 'utf8');

// // Event listeners
// readStream.on('data', (chunk) => {
//   console.log(chunk); // part of file
// });

// readStream.on('end', () => {
//   console.log('File reading completed!');
// });

// readStream.on('error', (err) => {
//   console.error('Error:', err);
// });

// const writeStream = fs.createWriteStream('./output.txt');

// // Writing in chunks
// writeStream.write('Hello ');
// writeStream.write('Stream!');
// writeStream.end();

// writeStream.on('finish', () => {
//   console.log('Writing completed!');
// });

// const readStream = fs.createReadStream('./sample.txt');
// const writeStream = fs.createWriteStream('copy.txt');

// Pipe = directly transfer data
// readStream.pipe(writeStream);

// console.log('File copy started...');
// }
