import express from "express";
import { getCompaniesWithEmployees, getCompanyById } from "../../../controllers/company-controller.js";
// R:\Dev IT\Node\Task\Day-11_10-09\src\controllers\company-controller.js
const router = express.Router();

router.get("/", getCompaniesWithEmployees);
router.get("/:id", getCompanyById);

export default router;
