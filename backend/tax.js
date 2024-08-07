const mongoose=require("mongoose")
const tax = new mongoose.Schema({
    tax1:Number ,
    tax2:Number 
})
const usertax = mongoose.model("tax",tax);
module.exports = usertax;