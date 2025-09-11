import express from "express";
import { getEmployeesWithCompany, getEmployeeById } from "../../../controllers/employee-controller.js";

const router = express.Router();

router.get("/", getEmployeesWithCompany);
router.get("/:id", getEmployeeById);

export default router;
