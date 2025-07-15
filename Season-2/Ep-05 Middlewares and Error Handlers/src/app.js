const express = require("express");

const app = express();

app.use(
  "/user",
  (req, res, next) => {
    console.log("Handling the route user");
    next();
    res.send("first request handler");
  },
  (req, res) => {
    console.log("Handling the route user 2");
    res.send("second request handler");
  }
);

app.listen(7777, () => {
  console.log("Server listening on port 7777");
});
