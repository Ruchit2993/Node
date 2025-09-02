// const {addFun , subFun} = require("C:/Users/Lenovo/OneDrive/Desktop/math")

// console.log(addFun(2,5))     


/// making file 1GB file 
const fs = require("fs");

const stream = fs.createWriteStream("file.txt");

// 1 MB chunk filled with "A"
const chunk = Buffer.alloc(1024 * 1024, "This is Very Big File ");

// Total MB for 1 GB
const totalMB = 1024;

let writtenMB = 0;

while (writtenMB < totalMB) {
  stream.write(chunk);
  writtenMB++;
}

stream.end();
console.log("1GB file created");
