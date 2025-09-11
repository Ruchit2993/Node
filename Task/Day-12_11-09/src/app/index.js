import dotenv from 'dotenv';
import express from 'express';
import router from '../modules/user/route/route.js'
import {sequelize} from '../config/dbConnect.js';
import { User } from '../model/user-model.js';
import { UserDetails } from '../model/user-details.js';
import { Company } from "../model/company-model.js";
import { Employee } from "../model/employee-model.js";
import companyRouter from "../modules/company/route/company-route.js";
import employeeRouter from "../modules/employee/route/employee-route.js";
import {createUser} from "../controllers/userUtil.js"
import requestLogger from "../middlewares/requestLogger.js"
dotenv.config();
const PORT = process.env.PORT
const app = express();
app.use('/',requestLogger, router);
// app.use("/companies", companyRouter);
// app.use("/employees", employeeRouter);

await sequelize.sync({ force: true })
// await sequelize.sync({alert: true})

await Company.bulkCreate(
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
            address: "11 Aaryan Corporate Park",
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
            address: "5 Aaryan Corporate Park",
            description: "Consulting",
            status: "active",
            createdBy: "system"
            
        },
    ],
);

await Employee.bulkCreate([
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

// createUser({ firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' });
// createUser({firstName: "Demo"})
app.listen(PORT, () => {
    console.log(`Server is running at port : ${PORT}`);
});
