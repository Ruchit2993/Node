// const readline  = require('readline') //this will return obj
// const fs =require('fs');

// let textread = fs.readFileSync('./input.txt','utf-8')
// console.log(textread)

// let content = `Data from input: ${textread}.  \n date Created ${new Date()}`
// fs.writeFileSync('./output.txt',content)

// How to take input and give output from user
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question("Enter Name: ", (name) =>{
//     console.log("Your name is :" +name)
//     rl.close();
// })

// rl.on("close",()=>{
//     console.log("Interface Closed");
//     process.exit(0);
// })

// const math = require('./math')
const {addFun , subFun} = require('./math')

// console.log(math);

// console.log(add(2,5)); // this will give error

// console.log(math(2,5));

// console.log(math.addFun(2,5));
// console.log(math.subFun(2,5));
console.log(addFun(2,5));
console.log(subFun(2,5));
