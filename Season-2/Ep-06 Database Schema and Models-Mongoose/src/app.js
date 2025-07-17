const express = require("express");
const { connectDB } = require("./config/database");

const app = express();

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
