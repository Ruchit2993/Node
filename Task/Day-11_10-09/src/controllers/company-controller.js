import { Company } from "../model/company-model.js";
import { Employee } from "../model/employee-model.js";

// Get all companies with employees
export const getCompaniesWithEmployees = async (req, res) => {
  try {
    const companies = await Company.findAll({
      include: [{ model: Employee }], // eager load employees
    });
    res.json(companies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Get single company with employees
export const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findByPk(req.params.id, {
      include: [{ model: Employee }],
    });

    if (!company) return res.status(404).json({ error: "Company not found" });

    res.json(company);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
