const express = require("express");
const cors = require("cors");
const orderModal=  require("./order")
const usermodal  =require("./modal")
const userdetails  = require("./userDetail");
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const router = require("./route")
const multer = require("multer")
const stripe = require("stripe")("sk_test_51P4DgDSCpBUS8op6msy0WLu6gzqvILV4MYVD3Zlr7fxMd1jHzwI8wsS2LqXuf9EvioF3p37Oe473UHJaRaFzOW0V00DOUAPRUR")
const app = express();
const upload = multer({ dest: 'uploads/' })
app.use(cors());
app.use(express.json())
dotenv.config();
app.use("/uploads",express.static('uploads'))
const name = mongoose.connect(process.env.URL);
if(name){
    console.log("connected")
}
app.use("/",router);
app.get("/getdata",(req,res)=>
{
    usermodal.find({})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
});

app.post("/checkout",async(req,res)=>
{
    const product = req.body;
})
app.get("/order",async(req,res)=>
{
    orderModal.find({})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})
app.post("/order",async(req,res)=>
{
    const product = req.body;
    const name = product.order;
    console.log(name)
    let id = Math.floor((Math.random() * 5) + 1);
    console.log(id)
    name.map(async(ele)=>
{
        const nameProduct = ele.nameProduct;
        const qunty = ele.qunty;
        const Price=  ele.Price;
        const namew = new orderModal({nameProduct,qunty,Price,id});
        await namew.save();
})
})
app.post("/userlogin",async(req,res)=>
{
    const {Email,password} = req.body;
    try{
        const check = await userdetails.findOne({email:Email})
        if(check)
        {
            if(password === check.password)
            {
                console.log(check._id);
                res.json({message:"match",id:check._id})
            }
            else{
                res.json("notmatch")
            }
        }
        else{
            console.log(err);
        }
    }
    catch(err)
    {
        console.log(err)
    }
})
app.get("/update/:id",(req,res)=>
{
    const id = req.params.id;
    console.log(id)
    usermodal.findById({_id:id})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})
app.get("/userdetails/:id",async(req,res)=>
{
    try{
        const i = req.params.id;
        console.log(i)
    }
    catch(err)
    {
        console.log(err)
    }
}  
)
app.get("/createuser",(req,res)=>
{
    res.end("hellow")
})
app.post("/createuser", upload.single('image'),async(req,res)=>
{    
    const nameProduct = req.body.nameProduct;
    const Price = req.body.Price;
    const ChooseCategory = req.body.ChooseCategory;
    const image = req.file.path;
    const qunty = 0
    const newServerice = new usermodal({nameProduct,Price,ChooseCategory,image,qunty});
    await newServerice.save();
})
app.delete("/deleteint/:id",async(req,res)=>
{
    try{
    const id=req.params.id;
    console.log(id)
    await usermodal.findByIdAndDelete({_id:id})
    }
    catch(err)
    {
        console.log(err)
    }
})
app.put("/update/:id",async(req,res)=>
{
    try{
        const nameProduct = req.body.nameProduct;
        const ChooseCategory = req.body.ChooseCategory;
        const Price = req.body.Price
        console.log(Price)
        const id = req.params.id;
        console.log(id)
        await usermodal.findByIdAndUpdate( {_id:id},{nameProduct,ChooseCategory,Price})
        .then(user=>res.json(user))
        .catch(err=>res.json({err}))
    }
    catch(err){
        console.log(err)
    }
})
const PORT = process.env.PORT
app.listen(PORT,(req,res)=>
{
    console.log(`post number ${PORT}`)
})