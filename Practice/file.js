const fs = require('fs');
const os = require('os');
// // sync call
// fs.writeFileSync('./test.txt','This is from the File.js')

// // Async call
// fs.writeFile('./test.txt','This is from the File.js async call ' ,(err)=>{} );

// const result = fs.readFileSync("./contact.txt","utf-8");
// console.log(result);
// const result = fs.readFileSync("./contact.txt"); //without utf-8 it will give in buffer 
// console.log(result);

// fs.readFile("./contact.txt","utf-8",(err,result)=>{
//     if (err){
//         console.log("err: ",err);
//     } else {
//         console.log(result);
//     }
// });

// fs.appendFileSync("./test.txt",` Hey There form the file.js ${Date.now()} \n`);

// fs.cpSync('./test.txt','./copy.txt')

// fs.unlinkSync("./copy.txt");

// console.log(fs.statSync('./input.txt').isFile())

// fs.mkdirSync("MyDocs/a/b",{recursive: true});


//--------------- Under Standing Node Flow ----------------------

console.log("1")

// //blocking code
// const responce  = fs.readFileSync("./contact.txt","utf-8");
// console.log(responce)

//non blocking code
fs.readFile("./contact.txt","utf-8",(err,result)=>{
    console.log(result)
});

console.log("2")

//default threadpool size = 4
// how to maximize it ?
// depends on machine - so if cpu is 8 core then can max it to 8
//how to find it ?

console.log(os.cpus().length);