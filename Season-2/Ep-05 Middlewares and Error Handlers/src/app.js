const express = require("express");

const app = express();

app.use("/user", (req, res, next) => {
  next(); // middleware
});

app.get(
  "/user",
  (req, res, next) => {
    console.log("Handling user route-1");
    next(); // middleware
  },
  (req, res, next) => {
    console.log("Handling user route-2");
    next(); // middleware
  },
  (req, res) => {
    console.log("Handling user route-3");
    res.send("Request Handler"); // request handler
  }
);

app.listen(7777, () => {
  console.log("Server listening on port 7777");
});
