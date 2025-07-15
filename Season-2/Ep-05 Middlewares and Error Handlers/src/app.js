const express = require("express");

const app = express();

app.patch("/user", (req, res) => {
  console.log("updated successfully");
  res.send("Route Handler 1");
});

app.listen(7777, () => {
  console.log("Server listening on port 7777");
});
