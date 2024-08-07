const mongoose = require("mongoose")
const employeeSchema = new mongoose.Schema({
    name:String,
    number:Number,
    age:Number,
    position:String,
    password:String
})
const empD = mongoose.model("empployedetails",employeeSchema)
module.exports = empD;