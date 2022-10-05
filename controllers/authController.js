/**
 * Importing Modules
 */
var SHA256 = require("crypto-js/sha256");
/**
 * Importing Models
 */
const AuthModel = require("../models/registerModel");

exports.test = (req, res) => {
  console.log("test");
  res.status(200).send("Hello world...");
};

exports.register = async (req, res) => {
  const emailFound = await AuthModel.findOne({ email: req.body.email });
  if (emailFound) {
    res.status(409).json({ msg: "user already exist" });
  } else {
    try {
      const passToCrypt = JSON.stringify(SHA256(req.body.password).words);
      const user = new AuthModel({ ...req.body, password: passToCrypt });
      await user.save();
      console.log({ user });
      res.status(200).send("Register successfully...");
    } catch (error) {
      res.status(400).json({ msg: error.message, err: "errror hai" });
    }
  }
};

exports.login = (req, res) => {
  console.log(req.body);
  res.status(200).send("login...");
};
