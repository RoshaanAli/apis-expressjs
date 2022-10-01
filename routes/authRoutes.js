/** Importing Libraries */
const express = require("express");
const router = express.Router();

/** Importing files */
const authController = require("../controllers/authController");

/** Routes */
router.get("/test", authController.test);
router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
