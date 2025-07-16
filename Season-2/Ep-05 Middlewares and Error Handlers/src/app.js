const express = require("express");

const { adminAuth, userAuth } = require("./middlewares/auth");

const app = express();

app.use("/getUserData", (req, res) => {
  try {
    throw new Error("error");
    res.send("Hello from server");
  } catch {
    res.status(500).send("something went wrong. Contact support team");
  }
});

// app.use("/", (err, req, res, next) => {
//   if (err) {
//     res.status(500).send("something went wrong");
//   }
// });

app.listen(7777, () => {
  console.log("Server listening on port 7777");
});
