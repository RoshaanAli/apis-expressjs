/** Importing Libraries */
const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  console.log("test");
  res.status(200).send("Hello world");
});

module.exports = router;
