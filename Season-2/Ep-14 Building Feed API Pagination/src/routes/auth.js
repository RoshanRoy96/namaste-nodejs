const express = require("express");
const { validateSignupData } = require("../utils/validation");
const bcrypt = require("bcrypt");
const { User } = require("../models/user");

const authRouter = express();

authRouter.post("/signup", async (req, res) => {
  try {
    // validating data
    validateSignupData(req);

    const { firstName, lastName, emailId, password } = req.body;

    // password hashing
    const passwordHash = await bcrypt.hash(password, 10);

    const userObj = { firstName, lastName, emailId, password: passwordHash };

    const user = new User(userObj);

    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isPasswordValid = await user.validatePassword(password);
    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    } else {
      const token = await user.getJWT();
      res.cookie("token", token, {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      });
      res.send("Login Successfull!!!!");
    }
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});

authRouter.post("/logout", async (req, res) => {
  res.cookie("token", null, { expires: new Date(Date.now()) });
  res.send("Logout Successfull!!!!!");
});

module.exports = { authRouter };
