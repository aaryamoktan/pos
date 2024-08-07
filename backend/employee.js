const mongoose = require("mongoose")
const employeeSchema = new mongoose.Schema({
    name:String,
    number:Number,
    age:Number,
    position:String
})
const empD = mongoose.model("empployedetails",employeeSchema)
module.exports = empD;