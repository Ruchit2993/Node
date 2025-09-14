const express = require("express");
const { getAllUsers, registerUser, getUserWithCompany } = require("../controllers/userController");

const router = express.Router();

router.get("/", getAllUsers);

router.post("/", registerUser);

router.get("/:id/details", getUserWithCompany);

module.exports = { router };
