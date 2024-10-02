const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    phone: String,
    bookedTable:{
        isBooking : {type : Boolean , default : false},
        tableNumber : Number,
        date : String,
        time : String
    }
})

const userModel = mongoose.model("User",userSchema)
module.exports = userModel;