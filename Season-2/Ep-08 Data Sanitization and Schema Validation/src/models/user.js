const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  emailId: {
    type: String,
    lowercase: true, // if a user adds emailId in capital letters, this will converts that to small letters(eg: ROshan@gmail.com)
    required: true,
    unique: true,
    trim: true, // if a user adds emailId by putting some space before and after, this will trim of that(eg: "emailId": "   roshan@gmail.com   ");
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 18,
  },
  gender: {
    type: String,
    validate(value) {
      if(!["male", "female", "others"].includes(value)) {
        throw new Error("Gender is not valid");
      }
    }
  },
  photoUrl: {
    type: String,
    default:
      "https://www.pnrao.com/wp-content/uploads/2023/06/dummy-user-male.jpg",
  },
  about: {
    type: String,
    default: "This is a default about of the user",
  },
  skills: {
    type: [String],
  },
},
{
  timestamps: true
}
);

const User = mongoose.model("User", userSchema);

module.exports = { User };
