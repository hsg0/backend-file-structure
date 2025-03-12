const randomUsername = require("../utils/random-username.js");

module.exports.homeController = (req, res) => {
  res.send("Hello World, from index-controller.js");
};
