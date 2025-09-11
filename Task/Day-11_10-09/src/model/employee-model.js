import { sequelize } from "../config/dbConnect.js";
import { DataTypes, Model } from "sequelize";
import { Company } from "./company-model.js";

class Employee extends Model { }

Employee.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Company,
        key: "id",
      },
      // onDelete: "CASCADE",
    },
    empName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    empCode: {
      type: DataTypes.STRING,
      unique: true,
    },
    contact: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.ENUM("active", "inactive", "deleted", "draft"),
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
    modelName: "Employee",
    tableName: "employees",
    timestamps: true,
  }
);

Company.hasMany(Employee,
  { foreignKey: "companyId" }
);
Employee.belongsTo(Company,
  { foreignKey: "companyId" }
);

export { Employee };
