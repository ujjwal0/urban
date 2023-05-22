const express=require("express");
const mongoose=require("mongoose");
const cors =require("cors")

const app=express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
const url="mongodb://localhost:27017/userdata"
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }
    ).then(()=>{
    console.log("success")
}).catch(()=>{
    console.log("not connected")
});
const member=mongoose.Schema({
    name:String,
    email:{
        type:String,
        // unique:true,
        required:true
    },
    password:String

},{
    versionKey:false
})


const  usermodle=mongoose.model("members",member);
app.post("/add",async(req,res)=>{
    console.log(req.body);
       await usermodle.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
       })
})

// app.get("/get",async(req,res)=>{
//        const email=req.body.email;
//        console.log(req.body)
//        const password=req.body.password
//        console.log(email)
//        const x=await usermodle.findOne({
//         email:email,
//         password:password
//        })
//        console.log(x);
//     //    if(x){
//     //     res.redirect("http://localhost:3000/home")
//     //    }
//     //    else{
//     //     res.redirect("http://localhost:3000/home")
//     //    }
// })
app.post("/get",async(req,res)=>{
    const {email,password}=req.body;
    const check=await usermodle.findOne({email:email,password:password})
    if(check){
        res.json("exist")
    }
    else{
        res.json("notexist")
    }
})
app.listen(5000,()=>{
    console.log("yay")
});
