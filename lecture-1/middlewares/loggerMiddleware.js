function loggerMiddleware(req, res, next) {
  res.on('finish', () => {
    console.log(`${req.method} ${req.url} ${res.statusCode} - ${new Date().toISOString()}`);
  });
  next();
}

module.exports = loggerMiddleware;
