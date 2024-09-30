const {body} = require("express-validator");
const User = require("../models/userModel");

const userRegisterValidator= ()=>{
    return[
        body('userName').notEmpty().withMessage("Username is required"), 
        body('email').notEmpty().withMessage("Email is required").isEmail().withMessage("Invalid Email").custom(async (email)=>{
            let checkUser = await User.findOne({email:email});
            if(checkUser){
                throw("Email already exists");
            }
        }),
        body('password').notEmpty().withMessage("Password is required").isLength({min: 8}).withMessage("Password must be atleast 8 characters long"),
        body('phone').notEmpty().withMessage("Phone is required").isLength({min: 10}).withMessage("Phone must be atleast 10 characters long").custom(async(phone)=>{
            let checkPhone = await User.findOne({phone:phone});
            if(checkPhone){
                throw("Phone already exists");
            }
        })
    ]
}




module.exports = userRegisterValidator;