const validator = require("validator");

const validateSignupData =  (req) => {
  const { firstName, lastName, emailId, password } = req.body;
  if (!firstName || !lastName) {
    throw new Error("Please enter your name");
  }

  if (!validator.isEmail(emailId)) {
    throw new Error("Please enter a valid email");
  }

  if (!validator.isStrongPassword(password)) {
    throw new Error("Please enter a strong password");
  }
};

const validateEditProfileData = (req) => {
  const allowedEditFields = [
    "firstName",
    "lastName",
    "age",
    "gender",
    "about",
    "photoUrl",
    "skills",
  ];

  const isEditAllowed = Object.keys(req.body).every((k) =>
    allowedEditFields.includes(k)
  );

  return isEditAllowed;
};

module.exports = { validateSignupData, validateEditProfileData };
