const express = require("express");
const fs = require("fs");
let users = require("../MOCK_DATA.json");
const apiKeyAuth = require("../middlewares/apiKeyAuth");

const router = express.Router();

router.get("/", apiKeyAuth, (req, res) => {
    return res.json(users);
});

router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);

    if (!user) {
        return res.status(404).json({ error: "User Not Found" });
    }
    return res.json(user);
});

router.post("/", (req, res) => {
    const body = req.body;

    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({ Status: "Failed", message: "Please provide all the details" });
    }

    const newUser = { ...body, id: users.length + 1 };
    users.push(newUser);

    fs.writeFileSync("./MOCK_DATA.json", JSON.stringify(users, null, 2));
    return res.json({ Status: "Success", id: newUser.id });
});

router.patch("/:id", (req, res) => {
    const { id } = req.params;
    const body = req.body;

    let user = users.find(u => u.id === parseInt(id));
    if (!user) {
        return res.status(404).json({ Status: "User Not Found" });
    }

    Object.assign(user, body);

    fs.writeFileSync("./MOCK_DATA.json", JSON.stringify(users, null, 2));
    return res.json({ Status: "Success", user });
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex(u => u.id === parseInt(id));

    if (userIndex === -1) {
        return res.status(404).json({ Status: "User Not Found" });
    }

    const deletedUser = users.splice(userIndex, 1);

    fs.writeFileSync("./MOCK_DATA.json", JSON.stringify(users, null, 2));
    return res.json({ Status: "Deleted", user: deletedUser[0] });
});

module.exports = router;
