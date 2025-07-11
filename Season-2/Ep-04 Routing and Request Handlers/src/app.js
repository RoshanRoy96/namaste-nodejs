const express = require("express");

const app = express();

// app.use("/", (req, res) => {
//   res.send("Namaste");
// });

// app.use("/hello/2", (req, res) => {
//   res.send("Hello-2");
// });

// app.use("/hello", (req, res) => {
//   res.send("Hello, hello, hello");
// });

// app.use("/", (req, res) => {
//   res.send("Namaste");
// });

app.use("/user", (req, res) => {
  res.send("order matters");
});

app.get("/user", (req, res) => {
  res.send({ firstName: "Roshan", lastName: "Roy" });
});

app.use("/test", (req, res) => {
  res.send("Hello from the server");
});

app.post("/user", (req, res) => {
  console.log("Save data to database");
  res.send("Data seccessfully saved to database");
});

app.delete("/user", (req, res) => {
  res.send("Deleted successfully");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
