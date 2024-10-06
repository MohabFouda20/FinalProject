const User = require("../models/userModel");
const { validationResult } = require("express-validator");  
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const userRegister = async (req, res) => {
    try{
        let userData = req.body;
        let errors = validationResult(req);
        if(!errors.isEmpty())
        {
            throw (errors)
        }
        let hashedPassword = await bcrypt.hash(userData.password, 10);
        userData.password = hashedPassword;
        await User.create(userData);
        res.status(200).json({message: "User registered successfully"})
    }catch(err)
    {
        res.status(500).json(err)
    }
}
const userlogin = async (req, res) => {
    try{
        let credential = req.body;
        let user = await User.findOne({email:credential.email})
        if(!user)
        {
            throw("Invalid email");
        }
        let isPasswordMatched = await bcrypt.compare(credential.password, user.password);
        if(!isPasswordMatched)
        {
            throw("Invalid Password");
        }
        let token = await jwt.sign({userName:user.userName}, process.env.jwtKey);
        res.cookie('jwt', token).json({message: "User logged in successfully" , token : token});

    }catch(err){
    res.status(500).json(err)
    }

}
const editUser = async (req, res) => {
    try{
        let userId = req.params.id;
        let userData = req.body;
        await User.findByIdAndUpdate(userId, userData);
        res.status(200).json({message: "User updated successfully"});
    }catch(err)
    {
        res.status(500).json(err);
    }
}
const getAllUsers = async (req, res) => {
    try{
        let users = await User.find();
        res.status(200).json(users);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
}
const getSingleUser = async (req, res) => {
    try{
        let userId = req.params.id
        let user = await User.findById(userId);
        res.status(200).json(user);
    }catch(err)
    {
        res.status(500).json(err);
    }
}
const deleteUser = async (req, res) => {
    try{
        let userId = req.params.id;
        await User.findByIdAndDelete(userId);
        res.status(200).json({message: "User deleted successfully"});
    }catch(err)
    {
        res.status(500).json(err);
    }
}



module.exports = {
    userRegister,
    userlogin,
    editUser,
    getAllUsers,
    getSingleUser,
    deleteUser
}