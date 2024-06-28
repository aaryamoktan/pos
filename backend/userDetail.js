const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    fullname:String,
    companyname:String,
    email:String,
    password:String,
    mobile:Number,
    Address:String
})
const userdetails =  mongoose.model("userDetails",userSchema);
module.exports = userdetails