const express = require("express");
const { connectDB } = require("./config/database");
const { User } = require("./models/user");

const app = express();

app.use(express.json()); // for reading JSON data

app.post("/signup", async (req, res) => {
  const userObj = req.body;

  const user = new User(userObj);

  try {
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});

// API- get user by email
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const user = await User.findOne({ emailId: userEmail });
    res.send(user);
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});

// feed API - to get all users from database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});

// delete user API
app.delete("/deleteUser", async (req, res) => {
  const userId = req.body.userId;
  try {
    await User.findByIdAndDelete({ _id: userId });
    res.send("User deleted successfully");
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});

// update user API
app.patch("/updateUser/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;
  try {
    const UPDATES_ALLOWED_FIELDS = [
      "firstName",
      "lastName",
      "password",
      "age",
      "gender",
      "about",
      "photoUrl",
      "skills",
    ];
    const isUpdatesAllowed = Object.keys(data).every((k) =>
      UPDATES_ALLOWED_FIELDS.includes(k)
    );
    if (!isUpdatesAllowed) {
      throw new Error("Update not allowed");
    }
    if (data?.skills.length > 10) {
      throw new Error("Skills cannot be more than 10");
    }
    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "before",
      runValidators: true,
    });
    console.log(user);
    res.send("User updated successfully");
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});

// update the user with emailId
// app.patch("/updateUser", async (req, res) => {
//   const userEmail = req.body.emailId;
//   const data = req.body;
//   try {
//     const user = await User.findOneAndUpdate({ emailId: userEmail }, data, {
//       returnDocument: "before",
//       runValidators: true,
//     });
//     console.log(user);
//     res.send("User updated successfully");
//   } catch (err) {
//     res.status(400).send("Error: " + err.message);
//   }
// });

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
