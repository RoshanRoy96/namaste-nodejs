const express = require("express");

const { adminAuth, userAuth } = require("./middlewares/auth");

const app = express();

app.use("/admin", adminAuth);
// app.use("/user", userAuth);

app.use("/user", userAuth, (req, res) => {   // since there is one route handler for user route
  res.send("User data sent");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All data sent");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("Deleted user");
});

app.listen(7777, () => {
  console.log("Server listening on port 7777");
});
