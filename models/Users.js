const mongoose = require("mongoose");

const UserModel = mongoose.model("user", {
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = UserModel;