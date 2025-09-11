import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../config/dbConnect.js";

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
        email: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        // Other model options go here
        // freezeTableName: true //model name == db tbl name if false then it will pural them like user to users

        tableName: 'users',
        // don't forget to enable timestamps!
        timestamps: true,
        //flase if you want to manage it by your self
        //date will tale by defalut date+time and dateonly will take only date


        // I don't want createdAt
        createdAt: true,

        // I want updatedAt to actually be called updateTimestamp
        updatedAt: 'updateTimestamp',
    },
);

(async () => {
    await sequelize.sync({ force: true });
    // Code here
    User.create({ firstName: "dev" })

    //   const jane = User.build({ firstName: 'Jane' });
    //   console.log(jane instanceof User); // true
    //   console.log(jane.firstName); // "Jane"
    
})();


// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true

export { User };

// export default new User