const Admin = require("../models/AdminModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const dotenv = require("dotenv");

const adminRegister = async (req, res) => {
  try {
    let adminData = req.body;
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw errors;
    }
    let hashedPassword = await bcrypt.hash(adminData.password, 10);
    adminData.password = hashedPassword;
    await Admin.create(adminData);
    res.status(200).json({ message: "Admin registered successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
};

const adminLogin = async (req, res) => {
  try {
    let credential = req.body;
    let admin = await Admin.findOne({ email: credential.email });
    if (!admin) {
      throw "Invalid Email";
    }
    let isPasswordMatched = await bcrypt.compare(
      credential.password,
      admin.password
    );
    if (!isPasswordMatched) {
      throw "Invalid Password";
    }
    let token = await jwt.sign({ name : admin.name ,email: admin.email }, process.env.jwtKey);
    res
      .status(200)
      .cookie("jwt", token)
      .json({ message: "Admin logged in successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
};
const editAdmin = async (req, res) => {
  try {
    let adminId = req.params.id;
    let adminData = req.body;
    await Admin.findByIdAndUpdate(adminId, adminData);
    res.status(200).json({ message: "Admin updated successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllAdmins = async (req, res) => {
  try {
    let Admins = await Admin.find();
    res.status(200).json(Admins);
  } catch (err) {
    res.status(500).json(err);
  }
};
const getSingleAdmin = async (req, res) => {
  try {
    let adminId = req.params.id;
    let admin = await Admin.findById(adminId);
    res.status(200).json(admin);
  } catch (err) {
    res.status(500).json(err);
  }
};
const deleteAdmin = async (req, res) => {
  try {
    let adminId = req.params.id;
    await Admin.findByIdAndDelete(adminId);
    res.status(200).json({ message: "Admin deleted successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  adminRegister,
  adminLogin,
  editAdmin,
  getAllAdmins,
  getSingleAdmin,
  deleteAdmin,
};
