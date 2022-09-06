const pathMiddleware = (req, res, next) => {
  console.log("path middleware started");
  next();
  console.log("path middleware ended");
};

module.exports = {
  pathMiddleware,
};
