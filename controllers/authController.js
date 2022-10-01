const AuthModel = require("../models/registerModel");

exports.test = (req, res) => {
  console.log("test");
  res.status(200).send("Hello world...");
};

exports.register = async (req, res) => {
  try {
    const user = new AuthModel({ ...req.body });
    const savedUser = await user.save();
    console.log({ savedUser });
    res.status(200).send("Register successfully...");
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.login = (req, res) => {
  console.log(req.body);
  res.status(200).send("login...");
};
