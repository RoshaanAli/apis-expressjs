/** Importing Packages */
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
dotenv.config();

/** Importing files */
const authRoutes = require("./routes/authRoutes");

/** Connect to mongodb atlas */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected successfully"))
  .catch((e) => {
    console.log("Db connection error", e.message);
  });

/** Middlewares */
app.use(bodyParser.json());
app.use("/v1/auth", authRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server is running on port ${port}`));
