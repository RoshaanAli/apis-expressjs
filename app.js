/** Importing Packages */
const express = require("express");

const app = express();

/** Importing files */
const authRoutes = require("./routes/authRoutes");

/** Middlewares */
app.use("/v1/auth", authRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server is running on port ${port}`));
