require("./db/db");
const express = require("express");
const app = express();
const userRoute = require("./api/routes/user");
const urlRoute = require("./api/routes/url");

// -------- Routes ---------
app.use("/user", userRoute);
app.use("/url", urlRoute);

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Home Page",
  });
});
app.use((req, res, next) => {
  res.status(200).json({
    message: "Route is not found",
  });
});

module.exports = app;
