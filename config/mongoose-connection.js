const mongoose = require("mongoose");

mongoose.connect(`${process.env.MONGODB_URI}`);

let db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = mongoose.connection;
