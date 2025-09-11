import express from 'express';
import router from '../modules/user/route/route.js'
import { 
    dbConn,
    sequelize } from '../config/dbConnect.js';
import {User} from '../model/user-model.js';
const PORT = 8085;
const app = express();

app.use('/', router);

// User.sync() //This creates the table if it doesn't exist (and does nothing if it already exists)
// User.sync({ force: true }) //This creates the table, dropping it first if it already existed
// User.sync({ alter: true }) //This checks what is the current state of the table in the database(which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.


// const dbConn = async () => {
//     try {
//             await sequelize.authenticate();
//             console.log('Connection has been established successfully.');
//         } catch(error) {
//             console.error('Unable to connect to the database:', error);
//         }
// }

// (async () => {
//   await sequelize.sync({ force: true }); // creates table
//   await User.create({ name: "Alice", age: 25 });
//   await User.create({ name: "Bob", age: 30 });

//   const users = await User.findAll();
//   console.log(users.map(u => u.toJSON()));
// })();

// const jane = User.build({ name: 'Jane' });
// console.log(jane instanceof User); // true
// console.log(jane.name); // "Jane"


app.listen(PORT, () => {
    console.log(`Server is running at port : ${PORT}`);
    dbConn();
});
