const mongoose = require("mongoose");
const data = new Date;

const orderSchema = new mongoose.Schema({
    nameProduct :String,
    qunty:Number,
    Price:Number,
    
    
},{timestamps:true})
const orderModalhis = mongoose.model("orderHistory",orderSchema)
module.exports = orderModalhis;