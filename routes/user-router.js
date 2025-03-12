const express = require("express");
const router = express.Router();
const { userController } = require("../controllers/user-controller.js");
const isLoggedin = require("../middlewares/isLoggedin.js");

router.get("/", isLoggedin, userController);

module.exports = router;
// In the code above, we have created a new route for the /user path.
// When a user navigates to this path, the server will respond with the message
// "Hello World, from user-router.js". This is a simple example of how to create a
// new route in Express. You can create as many routes as you need to handle
// different paths and requests in your application.
