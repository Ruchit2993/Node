import users from "../../MOCK_DATA.json" with { type: "json" };
import fs from "fs";
import { sendResponse } from "../utils/response-util.js";

function userDetails(req, res) {
    sendResponse(res, 200 , users)
}
function getUserById(req, res) {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);

    if (!user) {
        return res.status(404).json({ error: "User Not Found" });
    }
    sendResponse(res, 200 , user)
}
function createUser(req, res) {
    const body = req.body;

    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        sendResponse(res, 400 ,{ Status: "Failed", message: "Please provide all the details" })
    }

    const newUser = { ...body, id: users.length + 1 };
    users.push(newUser);

    fs.writeFileSync("./MOCK_DATA.json", JSON.stringify(users, null, 2));
    sendResponse(res, 200 , { Status: "Success", id: newUser.id })
}
function updateUser(req, res) {
    const { id } = req.params;
    const body = req.body;

    let user = users.find(u => u.id === parseInt(id));
    if (!user) {
        sendResponse(res, 404 ,{ Status: "User Not Found" })
        // return res.status(404).json({ Status: "User Not Found" });
    }

    Object.assign(user, body);

    fs.writeFileSync("./MOCK_DATA.json", JSON.stringify(users, null, 2));
    sendResponse(res, 200 ,{ Status: "Success", user })
    // return res.json({ Status: "Success", user });
}
function deleteUser(req, res) {
    const { id } = req.params;
    const userIndex = users.findIndex(u => u.id === parseInt(id));

    if (userIndex === -1) {
        sendResponse(res, 404 ,{ Status: "User Not Found" })
        // return res.status(404).json({ Status: "User Not Found" });
    }

    const deletedUser = users.splice(userIndex, 1);

    fs.writeFileSync("./MOCK_DATA.json", JSON.stringify(users, null, 2));
    sendResponse(res, 200 ,{ Status: "Deleted", user: deletedUser[0] })
    // return res.json({ Status: "Deleted", user: deletedUser[0] });
}
function deleteSoftUser(req, res) {
    const { id } = req.params;
    const user = users.find(u => u.id === parseInt(id));

    if (!user) {
        sendResponse(res, 404 ,{ Status: "User Not Found" })
        // return res.status(404).json({ Status: "User Not Found" });
    }

    user.deleted = true;

    fs.writeFileSync("./MOCK_DATA.json", JSON.stringify(users, null, 2));
    sendResponse(res, 200 ,{ Status: "Soft Deleted", user })
    // return res.json({ Status: "Soft Deleted", user });
}

export { userDetails, getUserById, createUser, updateUser, deleteUser, deleteSoftUser }