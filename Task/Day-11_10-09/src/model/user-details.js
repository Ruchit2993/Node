import { sequelize } from "../config/dbConnect.js";
import {DataTypes, Model } from "sequelize"; 

class UserDetails extends Model {}

UserDetails.init(
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
    modelName: 'UserDetails', // We need to choose the model name
    tableName: 'userDetails'
    
  },
);

// (async () => {
//     // await sequelize.sync({ force: true });
//     // Code here
//     UserDetails.create({ firstName: "dev" })

//     //   const jane = User.build({ firstName: 'Jane' });
//     //   console.log(jane instanceof User); // true
//     //   console.log(jane.firstName); // "Jane"
    
// })();

// if (UserDetails === sequelize.models.UserDetails){
//     console.log("working Details")
// }
// else{
//     console.log("notworking")
// }


export {UserDetails}