import express from 'express';
import router from '../modules/user/route/route.js'
import {dbConn} from '../config/dbConnect.js';
const PORT = 8085;
const app = express();

app.use('/',router);


app.listen(PORT, ()=>{
    console.log(`Server is running at port : ${PORT}`);
    dbConn();
});
