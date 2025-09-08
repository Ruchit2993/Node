const express = require("express");
const cors = require("cors");
const usersRoute = require("./routes/users");
const users = require("./MOCK_DATA.json");
const logger = require("./middlewares/logger");
const requestLogger = require("./middlewares/requestLogger");

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({
    methods: ["POST", "PATCH", "DELETE"]
}));

app.use(logger);
app.use(requestLogger);

app.get("/users", (req, res) => {
    const html = `
    <ul>
    ${users.map(u => `<li>${u.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});

app.use("/api/users", usersRoute);

app.listen(port, "0.0.0.0", () => console.log(`Server running on port ${port}!`));
