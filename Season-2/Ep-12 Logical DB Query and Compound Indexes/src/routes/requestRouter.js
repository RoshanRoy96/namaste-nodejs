const express = require("express");
const { userAuth } = require("../middlewares/auth");
const { ConnectionRequestModel } = require("../models/connectionRequest");

const requestRouter = express();

requestRouter.post(
  "/request/send/:status/:toUserId",
  userAuth,
  async (req, res) => {
    try {
      const fromUserId = req.user._id;
      const toUserId = req.params?.toUserId;
      const status = req.params?.status;

      const connectionRequest = new ConnectionRequestModel({
        fromUserId,
        toUserId,
        status,
      });

      const data = await connectionRequest.save();

      res.json({
        message: `Connection request sent successfully`,
        data,
      });
    } catch (err) {
      res.status(400).send("Error: " + err.message);
    }
  }
);

module.exports = { requestRouter };
