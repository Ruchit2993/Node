import express from 'express';
import companyRouter from '../../../modules/company/route/company-route.js'
import employeeRouter from '../../../modules/employee/route/employee-route.js'
import { getEmployeesWithCompany, getEmployeeById } from "../../../controllers/employee-controller.js";
import { getCompaniesWithEmployees, getCompanyById } from "../../../controllers/company-controller.js";
const router = express.Router();

router.get("/greet", (req, res) => {
    const user ={
        Greet : "Hellow.........."
    }
    return res.json(user);
});


router.get("/companies", getCompaniesWithEmployees);
router.get("/companies/:id", getCompanyById);

router.get("/employees", getEmployeesWithCompany);
router.get("/employees/:id", getEmployeeById);

// router.get("/comanies",companyRouter)
// router.get("/employees", employeeRouter);

export default router;
