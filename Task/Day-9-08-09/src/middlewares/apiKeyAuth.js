export default function apiKeyAuth(req, res, next) {
    const apiKey = req.headers["x-api-key"];
    if (apiKey !== "dev") {
        console.log(`${req.ip} Has not Provided Proper key or Header`);
        return res.status(401).json({ Status: "Unauthorized" });
    }
    next();
}
