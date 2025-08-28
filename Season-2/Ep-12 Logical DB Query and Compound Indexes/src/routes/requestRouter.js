const express = require("express");
const { userAuth } = require("../middlewares/auth");

const requestRouter = express();

requestRouter.post("/sendConnectionRequest", userAuth, async (req, res) => {
  const user = req.user;
  console.log("Sending connection request");
  res.send(user.firstName + " " + "sent connection request");
});

module.exports = { requestRouter };
