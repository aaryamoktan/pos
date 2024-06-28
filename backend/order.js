const mongoose = require("mongoose");
const data = new Date;
const orderSchema = new mongoose.Schema({
    nameProduct :String,
    qunty:Number,
    Price:Number,
    id:Number,
    
},{timestamps:true})
const orderModal = mongoose.model("ordaer",orderSchema)
module.exports = orderModal;