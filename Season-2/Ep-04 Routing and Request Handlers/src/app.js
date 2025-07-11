const express = require("express");

const app = express();

app.use("/", (req, res) => {
  console.log("Hello, hello, hello");
}); 

app.use("/test", (req, res) => {
  res.send("Hello from server");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
