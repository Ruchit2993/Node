import { sequelize } from "../config/dbConnect.js";
import {DataTypes, Model } from "sequelize"; 
// import { createUser } from "../controllers/userUtil.js";

class User extends Model {}

User.init(
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User', // We need to choose the model name
    tableName: 'users'
  },
);

// createUser({firstName: "hi"})

// (async () => {
//     // await sequelize.sync({ force: true });
//     // Code here
//     User.create({ firstName: "dev" })

//     //   const jane = User.build({ firstName: 'Jane' });
//     //   console.log(jane instanceof User); // true
//     //   console.log(jane.firstName); // "Jane"
    
// })();

// if (User === sequelize.models.User){
//     console.log("working model")
// }
// else{
//     console.log("notworking")
// }

// export default new User;
export {User}