module.exports = (req, res, next) => {
  req.randomNumber = Math.random().toString(); // Adds a random number to the request object
  next(); // Proceeds to the next middleware/route
};
