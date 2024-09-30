const mongoose = require('mongoose')
const menuSchema = new mongoose.Schema({
    name: String ,
    image:String,
    price:Number,
    category:String,
    description:String,
})

const menu = mongoose.model('Menu',menuSchema)
module.exports = menu