import express from 'express';
import router from '../modules/user/route/route.js'
import {
    // dbConn,
    sequelize
} from '../config/dbConnect.js';
import { User } from '../model/user-model.js';
import { UserDetails } from '../model/user-details.js';
import { Company } from "../model/company-model.js";
import {Employee}  from "../model/employee-model.js";
const PORT = 8085;
const app = express();

app.use('/', router);
// sequelize.sync({force:true})

// await User.sync({ force: true })
// await UserDetails.sync({ force: true })
// await Company.sync({ force: true })
// await Employee.sync({ force: true })

await sequelize.sync({force: true})
// await sequelize.sync({alert: true})

// console.log('The table for the User model was just (re)created!');

// createUser({firstName: "Demo"})

const companies = await Company.bulkCreate(
    [
        { 
            cmpName: "Dev IT", 
            address: "14 Aaryan Corporate Park", 
            description: "Software Services", 
            status: "active", 
            createdBy: "system" 
        },
        { 
            cmpName: "E-Infochips", 
            address: "15 Aaryan Corporate Park", 
            description: "Chip Design", 
            status: "active", 
            createdBy: "system" 
        },
        { 
            cmpName: "Ecubics", 
            address: "15 Aaryan Corporate Park", 
            description: "Digital Solutions", 
            status: "active", 
            createdBy: "system" 

        },
        { 
            cmpName: "Febinacci", 
            address: "15 Aaryan Corporate Park", 
            description: "Consulting", 
            status: "active", 
            createdBy: "system" 
            
        },
    ],
);

const employees = await Employee.bulkCreate([
    {
        companyId: 1,
        empName: "Dipak Vidani",
        empCode: "EMP001",
        contact: "0123456789",
        address: "Botad",
        status: "active",
        createdBy: "system",
    },
    {
        companyId: 2,
        empName: "Mitesh Ashara",
        empCode: "EMP002",
        contact: "0123456789",
        address: "Rajkot",
        status: "active",
        createdBy: "system",
    },
    {
        companyId: 3,
        empName: "Uday Faldu",
        empCode: "EMP003",
        contact: "0123456789",
        address: "Rajkot",
        status: "inactive",
        createdBy: "system",
    },
    {
        companyId: 4,
        empName: "Dhruvit Shukla",
        empCode: "EMP004",
        contact: "0123456789",
        address: "Surendranagar",
        status: "active",
        createdBy: "system",
    },
    {
        companyId: 4,
        empName: "Dhruv Patel",
        empCode: "EMP005",
        contact: "0123456789",
        address: "Ahmedabad",
        status: "active",
        createdBy: "system",
    },
]);


app.listen(PORT, () => {
    console.log(`Server is running at port : ${PORT}`);
    // dbConn();
});
