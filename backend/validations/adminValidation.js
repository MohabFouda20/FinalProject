const Admin = require("../models/AdminModel");
const { body } = require("express-validator");

const adminRegisterValidator = () => {
  return [
    body("name").notEmpty().withMessage("Name is required"),
    body("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Invalid Email")
      .custom(async (email) => {
        let checkAdmin = await Admin.findOne({ email: email });
        if (checkAdmin) {
          throw "Email already exists";
        }
      }),
    body("password")
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 8 })
      .withMessage("Password must be atleast 8 characters long"),
  ];
};

module.exports = adminRegisterValidator;
