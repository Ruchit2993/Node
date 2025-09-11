import { sequelize } from "../config/dbConnect.js";
import {DataTypes, Model } from "sequelize"; 

class UserDetails extends Model {}

UserDetails.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'UserDetails',
    tableName: 'userDetails'
    
  },
);

export {UserDetails}