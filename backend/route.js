const express = require("express");
const router = express.Router();
router.get("/",(req,res)=>
{
res.send("hellow from home")
})
router.post("/",(req,res)=>
{
    res.send("hellow from home")
})
module.exports  =router