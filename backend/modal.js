const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    nameProduct:String,
    ChooseCategory:String,
    Price:Number,
    qunty:Number,
    image:String,  
})
const usermodal = mongoose.model("inventryfooditems",userSchema)
module.exports = usermodal;