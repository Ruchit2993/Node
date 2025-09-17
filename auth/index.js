const express = require('express')
const app = express()
const port = 8080
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

app.use(cookieParser());

app.get('/', function (req, res) {
    // res.cookie("name", "hi");
    bcrypt.genSalt(10,function(err,salt){
        bcrypt.hash("password", salt, function(err,hash){
            console.log(hash)
            //$2b$10$2/X/lz9GdYu/0XKJ9Lgf2e..w6ALvyoF2RF8dCy3Uy79WrIwpyNpi
        })
    })
    
    bcrypt.compare("password","$2b$10$2/X/lz9GdYu/0XKJ9Lgf2e..w6ALvyoF2RF8dCy3Uy79WrIwpyNpi",function(err,result){
        console.log(result)
    })

    let token = jwt.sign({email:"abc@gmail.com",is_admin:"true"},"abc");
    res.cookie("token",token);
    // console.log(token);
    res.send("working");
})

app.get("/api",function(req,res){
    // console.log(req.cookies)
    let djt = jwt.verify(req.cookies.token,"abc")
    // console.log(djt)
    // console.log("req",req)
    // console.log("req",res)
    res.send("done")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
