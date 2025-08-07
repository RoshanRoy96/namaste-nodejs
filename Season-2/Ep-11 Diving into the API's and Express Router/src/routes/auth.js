const { validateSignUpData } = require("../utils/validation");
const { User } = require("../models/user");
const bcrypt = require("bcrypt");

const express = require("express");

const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {
  try {
    // validation of data
    validateSignUpData(req);

    const { firstName, lastName, emailId, password } = req.body;

    // encrypting password
    const passwordHash = await bcrypt.hash(password, 10);

    // creating new instance of user
    const userObj = { firstName, lastName, emailId, password: passwordHash };
    const user = new User(userObj);

    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      res.send("Invalid credentials");
    }
    const isPasswordValid = await user.validatePassword(password);
    if (isPasswordValid) {
      // creating JWT token
      const token = await user.getJWT();

      res.cookie("token", token, {
        expires: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000),
      }); // cookie will expire in 8 days
      res.send("Login Successful!");
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});

authRouter.post("/logout", async (req, res) => {
  res.cookie("token", null, { expires: new Date(Date.now()) });
  res.send("Logout successfull!!!!");
});

module.exports = authRouter;
