const express = require("express");
const { getProfiles, createProfile, seedProfiles } = require("../controllers/profileController");

const router = express.Router();

//get all profiles
router.get("/", getProfiles);

//create a profile
router.post("/", createProfile);

// Seed profiles (for testing)
router.post("/seed", seedProfiles);

//get profile of user by id
router.get("/:id/user", getProfiles);

module.exports = { router };