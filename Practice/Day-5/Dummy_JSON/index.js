const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  res.json = (data, statusCode = 200) => {
    res.writeHead(statusCode, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  };

  const parsedUrl = url.parse(req.url, true);

  if (req.method === "GET" && parsedUrl.pathname === "/test") {
    res.json({
      message: "Received GET request",
      query: parsedUrl.query,
    });
  } else if (req.method === "POST" && parsedUrl.pathname === "/test") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      let parsedBody = {};
      try {
        parsedBody = body ? JSON.parse(body) : {};
      } catch {
        parsedBody = { error: "Invalid JSON in body" };
      }

      res.json({
        message: "Received POST request",
        body: parsedBody,
      });
    });
  } else {
    res.json({ error: "Not found" }, 404);
  }
});

const PORT = 8000

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
