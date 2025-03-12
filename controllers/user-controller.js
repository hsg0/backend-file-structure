module.exports.userController = (req, res) => {
  res.send(req.randomNumber.toString());
};
// // In the code above, we have created a new controller function called homeController.
// // This function sends a response back to the client with the message
// // "Hello World, from index-router.js". This is a simple example of how to create a
// // controller function in Express. You can create as many controller functions as you
// // need to handle different paths and requests in your application.
// Compare this snippet from app.js:
