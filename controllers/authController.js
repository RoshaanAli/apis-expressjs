exports.test = (req, res) => {
  console.log("test");
  res.status(200).send("Hello world...");
};

exports.login = (req, res) => {
  console.log(req.body);
  res.status(200).send("login...");
};
