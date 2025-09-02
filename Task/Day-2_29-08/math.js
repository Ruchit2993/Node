function add(a,b){
    return a + b;
}
function sub(a,b){
    return a - b;
}

// console.log(add(5,10));

// module.exports = "this is math.js"

// module.exports = add;
// module.exports = sub; // this will override the md.exp so make it as obj

module.exports = {
    addFun: add,
    subFun: sub
};

// exports.addFun = (a,b)=> a + b;
// exports.subFun = (a,b)=> a - b; //this is anonymous fun