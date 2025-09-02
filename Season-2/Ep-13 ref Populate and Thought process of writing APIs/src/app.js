const express = require("express");
const { connectDB } = require("./config/database");
const { authRouter } = require("./routes/auth");
const { profileRouter } = require("./routes/profileRouter");
const { requestRouter } = require("./routes/requestRouter");

const cookieParser = require("cookie-parser");
const { userRouter } = require("./routes/user");

const app = express();

app.use(express.json()); // for reading JSON data
app.use(cookieParser()); // for reading cookies

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

connectDB()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(7777, () => {
      console.log("Server listening on port 7777");
    });
  })
  .catch((err) => {
    console.log("Database connection failed");
  });
