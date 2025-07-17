const express = require("express");
const { connectDB } = require("./config/database");
const { User } = require("./models/user");

const app = express();

app.post("/signup", async (req, res) => {
  const userObj = {
    firstName: "Roshan",
    lastName: "Roy",
    emailId: "roshanroy1121@gmail.com",
    password: "roshan@1234",
  };

  // creating a new instance of User model
  const user = new User(userObj);

  await user.save(); // saving data to our database....this function will returns a promise...so we have to use async-await here
  res.send("User added successfully");
});

connectDB()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(7777, () => {
      console.log("Server listening on port 7777");
    });
  })
  .catch((error) => {
    console.log("DB connection failed");
  });
