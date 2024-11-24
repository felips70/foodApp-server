const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserModel = require("../models/Users");

const signUp = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const passwordRegex =
    /^(?=.*\d)(?=.*[!@#\$%\^&\*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (!passwordRegex.test(password)) {
    return res.status(400).send("Invalid password");
  }

  const currentUser = await UserModel.findOne({ email });

  if (!currentUser) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new UserModel({
      firstName,
      lastName,
      email,
      password: hashedPassword
    })

    const savedUser = await user.save();

    const token = jwt.sign({ userId: savedUser._id }, 'randomKey');

    res.status(200).json({
      token,
      user: savedUser
    });

  } else {
    return res.status(400).send("User already exists");
  }
}

const logIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(400).send("User not found");
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (isPasswordCorrect) {
    const token = jwt.sign({ userId: user._id }, "randomkey")
    return res.status(200).json({ user, token });
  } else {
    res.status(400).send("Incorrect login credentials");
  }

}

module.exports = {
  signUp,
  logIn
}