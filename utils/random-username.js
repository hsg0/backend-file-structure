const crypto = require("crypto");

module.exports = () => {
  let bytes = crypto.randomBytes(13).toString("hex");
  console.log(bytes);
  return bytes;
};
