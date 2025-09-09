import fs from "fs";

export default function logger(req, res, next) {
    res.on("finish", () => {
        fs.appendFile(
            "log.txt",
            `\n Timestamp: ${Date.now()}: IP: ${req.ip}: Method: ${req.method}: Url Path: ${req.path}: Status: ${res.statusCode}`,
            () => {}
        );
    });
    next();
}
