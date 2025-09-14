const express = require("express");
const { getCompanyWithUsers } = require("../controllers/companyController");

const router = express.Router();

router.get("/:id/users", getCompanyWithUsers);

module.exports = { router };