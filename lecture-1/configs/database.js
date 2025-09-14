const { Sequelize } = require("sequelize");

const db = new Sequelize(
  "testdb", 
  "root", 
  "GjRolex@7831$", 
  {
    host: "localhost",
    dialect: "mysql",
    logging: false,
  }
);

function authenticateDB() {
  db.authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((error) => {
      console.error("Unable to connect to the database:", error);
    });
}
authenticateDB();

module.exports = { db };
