import { sequelize } from "../config/dbConnect.js";
import { DataTypes, Model } from "sequelize";
// import { createUser } from "../controllers/userUtil.js";

class User extends Model { }

User.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  },
);

// createUser({ firstName: "hi" })

export { User }