require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const indexRouter = require("./routes/index-router.js");
const userRouter = require("./routes/user-router.js");
const db = require("./config/mongoose-connection.js");

app.use("/", indexRouter);

app.use("/user", userRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
