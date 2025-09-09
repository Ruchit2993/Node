import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../config/dbConnect";

const User = sequelize.define(
    'User',
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
        // freezeTableName: true //model name == db tbl name if false then it will pural them like user to users
        // tableName: 'users'
        // User.sync() //This creates the table if it doesn't exist (and does nothing if it already exists)
        // User.sync({ force: true }) //This creates the table, dropping it first if it already existed
        // Use2r.sync({ alter: true }) //This checks what is the current state of the table in the database(which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.
    },
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true