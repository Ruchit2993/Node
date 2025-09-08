// middlewares/apiKeyAuth.js
function apiKeyAuth(req, res, next) {
    const apiKey = req.headers["x-api-key"];
    if (apiKey !== "apikey") {
        console.log(`${req.ip} Has not Provided Proper key or Header`);
        return res.status(401).json({ Status: "Unauthorized" });
    }
    next();
}

module.exports = apiKeyAuth;