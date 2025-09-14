require("./configs/database"); // Ensure DB connection check runs
const express = require("express");
const { router } = require("./routes/userRouter");
const { router: companyRouter } = require("./routes/companyRouter");
const { router: profileRouter } = require("./routes/profileRouter");
const loggerMiddleware = require("./middlewares/loggerMiddleware");
const authRouter = require("./routes/auth"); // Import auth routes
const session = require("express-session");
const path = require('path')

//make express app instance
const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET || "your_session_secret",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

app.use(loggerMiddleware);
app.use(express.json());
app.use("/users", router); //users router
app.use("/companies", companyRouter); // Register companyRouter
app.use("/profiles", profileRouter); // Register profileRouter
app.use("/auth", authRouter); // Register auth routes

app.use(
  session({
    secret: process.env.SESSION_SECRET || "your_session_secret",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, //http only
  })
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "api-info.html"))
})

app.listen(3000, () => {
  console.log(`Server is Running at port : 3000`);
});
