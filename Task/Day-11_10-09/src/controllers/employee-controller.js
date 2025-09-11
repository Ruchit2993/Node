import { Company } from "../model/company-model.js";
import { Employee } from "../model/employee-model.js";

//  Get all employees with their company
export const getEmployeesWithCompany = async (req, res) => {
  try {
    const employees = await Employee.findAll({
      include: [{ model: Company }], // eager load company
    });
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single employee with company
export const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id, {
      include: [{ model: Company }],
    });

    if (!employee) return res.status(404).json({ error: "Employee not found" });

    res.json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
