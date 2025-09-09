import express from "express";
import apiKeyAuth from "../middlewares/apiKeyAuth.js";
import { userDetails, getUserById, updateUser, createUser, deleteUser, deleteSoftUser } from "../controllers/userController.js"

const router = express.Router();

router.get("/get-all", apiKeyAuth, userDetails);
router.get("/:id", getUserById);

router.post("/", createUser);

router.patch("/:id", updateUser);

// router.delete("/:id",deleteUser);
router.delete("/:id", deleteSoftUser);

export default router;
