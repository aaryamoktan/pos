const express = require("express");
const cors = require("cors");
const orderModal = require("./order")
const empD = require("./employee")
const usertax = require("./tax")
const usermodal = require("./modal")
const userdetails = require("./userDetail");
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const router = require("./route")
const multer = require("multer")
const bcrypt = require("bcrypt")
const stripe = require("stripe")("sk_test_51P4DgDSCpBUS8op6msy0WLu6gzqvILV4MYVD3Zlr7fxMd1jHzwI8wsS2LqXuf9EvioF3p37Oe473UHJaRaFzOW0V00DOUAPRUR")
const app = express();
const upload = multer({ dest: 'uploads/' })
app.use(cors());
app.use(express.json())
dotenv.config();
app.use("/uploads", express.static('uploads'))
const name = mongoose.connect(process.env.URL);
if (name) {
    console.log("connected")
}
app.use("/", router);
app.get("/getdata", (req, res) => {
    usermodal.find({})
        .then(user => res.json(user))
        .catch(err => res.json(err))
});
app.post("/tax", async (req, res) => {
    try {
        const tax1 = req.body.tax1;
        const tax2 = req.body.tax;
        const newtax = new usertax({ tax1, tax2 })
        await newtax.save();
    }
    catch (err) {
        console.log(err)
    }
})
app.post("/checkout", async (req, res) => {
    const product = req.body;
})
app.get("/order", async (req, res) => {
    orderModal.find({})
        .then(user => res.json(user))
        .catch(err => res.json(err))
})
app.post("/order", async (req, res) => {
    const date = new Date()
    const product = req.body;
    const day = date.getDay()
    const name = product.order;
    console.log(name)
    name.map(async (ele) => {
        const nameProduct = ele.nameProduct;
        const qunty = ele.qunty;
        const Price = ele.Price;
        const namew = new orderModal({ nameProduct, qunty, Price, day });
        await namew.save();
    })
})
app.post("/login",async(req,res)=>
{
    const name = req.body.name;
    const password = req.body.password;
    try{
        const check = await empD.findOne({name:name})
       
        if(check){
          
            if(check.password === password)
            {
                if(check.position === "Manager"){
                    res.status(200).json("manager")
                    
                }
                else if(check.position === "Casiher"){
                    res.status(200).json("Casiher")
                }
                else if(check.position === "Weiter"){
                    res.status(200).json("Weiter")
                }
                else if(check.position === "Ceif"){
                    res.status(200).json("Ceif")
                }
            }
            else{
                res.json("fail")
            }
        }
    }
    catch(err)
    {
        console.log(err)
    }

})
app.post("/regist", async (req, res) => {
    try {
        const  saltround = 10;
        const name = req.body.name;
        const number = req.body.number;
        const position = req.body.position;
        const age = req.body.age;
        const password = req.body.password;
       const hastpass =  await bcrypt.hash(password,saltround)
        const savedetail = new empD({ name, number, position, age,password});
        await savedetail.save();
    }
    catch (err) {
        console.log(err)
    }
})
app.post("/userlogin", async (req, res) => {
    const { Email, password } = req.body;
    try {
        const check = await userdetails.findOne({ email: Email })
        if (check) {
            if (password === check.password) {
                console.log(check._id);
                res.json({ message: "match", id: check._id })
            }
            else {
                res.json("notmatch")
            }
        }
        else {
            console.log(err);
        }
    }
    catch (err) {
        console.log(err)
    }
})
app.get("/update/:id", (req, res) => {
    const id = req.params.id;
    console.log(id)
    usermodal.findById({ _id: id })
        .then(user => res.json(user))
        .catch(err => res.json(err))
})
app.get("/userdetails/:id", async (req, res) => {
    try {
        const i = req.params.id;
        console.log(i)
    }
    catch (err) {
        console.log(err)
    }
}
)
app.get("/createuser", (req, res) => {
    res.end("hellow")
})
app.post("/createuser", upload.single('image'), async (req, res) => {
    const nameProduct = req.body.nameProduct;
    const Price = req.body.Price;
    const ChooseCategory = req.body.ChooseCategory;
    const image = req.file.path;
    const qunty = 0
    const newServerice = new usermodal({ nameProduct, Price, ChooseCategory, image, qunty });
    await newServerice.save();
})
app.delete("/deleteint/:id", async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        await usermodal.findByIdAndDelete({ _id: id })
    }
    catch (err) {
        console.log(err)
    }
})
app.put("/update/:id", async (req, res) => {
    try {
        const nameProduct = req.body.nameProduct;
        const ChooseCategory = req.body.ChooseCategory;
        const Price = req.body.Price
        console.log(Price)
        const id = req.params.id;
        console.log(id)
        await usermodal.findByIdAndUpdate({ _id: id }, { nameProduct, ChooseCategory, Price })
            .then(user => res.json(user))
            .catch(err => res.json({ err }))
    }
    catch (err) {
        console.log(err)
    }
})
const PORT = process.env.PORT
app.listen(PORT, (req, res) => {
    console.log(`post number ${PORT}`)
})