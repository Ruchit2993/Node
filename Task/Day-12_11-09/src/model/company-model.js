import { sequelize } from "../config/dbConnect.js";
import { DataTypes, Model } from "sequelize";

class Company extends Model {}

Company.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cmpName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    status: {
      type: DataTypes.ENUM("active", "inactive","deleted","draft"),
      defaultValue: "draft",
    },
    createdBy: {
      type: DataTypes.STRING,
    },
    updatedBy: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Company",
    tableName: "companies",
    timestamps: true,
  }
);

export { Company };
