import express from "express";
import fs from "fs";
import users from "../MOCK_DATA.json" with { type: "json" };
import apiKeyAuth from "../middlewares/apiKeyAuth.js";

const router = express.Router();

function userDetails(req,res){
    return res.json(users);
}
function findUserDetails(req,res){
        const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);

    if (!user) {
        return res.status(404).json({ error: "User Not Found" });
    }
    return res.json(user);
}
function addUserDetails(req,res){
    const body = req.body;

    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({ Status: "Failed", message: "Please provide all the details" });
    }

    const newUser = { ...body, id: users.length + 1 };
    users.push(newUser);

    fs.writeFileSync("./MOCK_DATA.json", JSON.stringify(users, null, 2));
    return res.json({ Status: "Success", id: newUser.id });
}
function editUserDetails(req,res){
    const { id } = req.params;
    const body = req.body;

    let user = users.find(u => u.id === parseInt(id));
    if (!user) {
        return res.status(404).json({ Status: "User Not Found" });
    }

    Object.assign(user, body);

    fs.writeFileSync("./MOCK_DATA.json", JSON.stringify(users, null, 2));
    return res.json({ Status: "Success", user });
}
function removeUserDetails(req,res){
    const { id } = req.params;
    const userIndex = users.findIndex(u => u.id === parseInt(id));

    if (userIndex === -1) {
        return res.status(404).json({ Status: "User Not Found" });
    }

    const deletedUser = users.splice(userIndex, 1);

    fs.writeFileSync("./MOCK_DATA.json", JSON.stringify(users, null, 2));
    return res.json({ Status: "Deleted", user: deletedUser[0] });
}
function removeSoftUserDetails(req,res){
    const { id } = req.params;
    const user = users.find(u => u.id === parseInt(id));

    if (!user) {
        return res.status(404).json({ Status: "User Not Found" });
    }

    user.deleted = true;

    fs.writeFileSync("./MOCK_DATA.json", JSON.stringify(users, null, 2));
    return res.json({ Status: "Soft Deleted", user });
}


router.get("/get-all", apiKeyAuth,userDetails);
router.get("/:id",findUserDetails);

router.post("/",addUserDetails);

router.patch("/:id",editUserDetails);

// router.delete("/:id",removeUserDetails);
router.delete("/:id",removeSoftUserDetails);

export default router;
