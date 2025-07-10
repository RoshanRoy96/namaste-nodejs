const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Hello from dashboard!");
});

app.use("/hello", (req, res) => {
  res.send("Hello, hello, hello");
});

app.use("/test", (req, res) => {
  res.send("Hello from server!");
});

app.listen(3001, () => {
  console.log("Server successfully listening to port 3001");
});
