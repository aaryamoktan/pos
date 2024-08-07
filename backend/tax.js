const mongoose=require("mongoose")
const tax = new mongoose.Schema({
    tax:Number  
})
const usertax = mongoose.model("tax",tax);
module.exports = usertax;