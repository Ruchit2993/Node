import mysql from 'mysql2/promise';

//1 connect to mysql

const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mysql_db"

});

console.log("connected to mysql database");

//2 create a DB

// await db.query("CREATE DATABASE IF NOT EXISTS mysql_db");
// console.log("created database");
// console.log(await db.execute('show databases'))

//3 then we to create a table

await db.execute(`
    CREATE TABLE IF NOT EXISTS users(
        id INT AUTO_INCREMENT PRIMARY KEY,
        userName VARCHAR(50) NOT NULL,
        eMail VARCHAR(50) NOT NULL UNIQUE
    );
    `);

// console.log(await db.execute('show tables'))

//4 crud operation

//insert
await db.execute(`
    INSERT into users(userName, eMail) Values ('Dev','devit@dev.com')
    `);

//read
await db.execute(`
    select * from users
    `);
