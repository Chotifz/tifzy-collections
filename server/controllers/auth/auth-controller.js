const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

//register
const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(500).json({
      succes: true,
      message: "Regristration successfull",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      succes: false,
      message: "Some error occured",
    });
  }
};

//login
const loginUser = async (req, res) => {
  try {
  } catch (e) {
    console.log(e);
    res.status(500).json({
      succes: false,
      message: "Some error occured",
    });
  }
};
//logout

//auth middlleware

module.exports = { registerUser, loginUser };
