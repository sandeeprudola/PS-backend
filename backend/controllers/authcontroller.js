const bcrypt=require("bcryptjs")
const jwt=require('jsonwebtoken')
const User=require("../db")
const { JWT_SECRET } = require("../config")

exports.register=async(req,res)=>{
    try{
    const {username,password,firstName,lastName, role}=req.body;
    const hashedPassword=await bcrypt.hash(password,10);
    const newUser=new User({username,password:hashedPassword,firstName,lastName,role})
    await newUser.save();
    res.status(201).json({message: "user created successfully"});
    }
    catch(err){
        res.status(500).json({error:"there is some error in authcontroller"})
    }
}
exports.login=async(req,res)=>{
    try{
        const {username,password}=req.body;
        const user=await User.findOne({username});
        if(!user){
            return res.status(401).json({message: "user not found"})
        }

        const ismatch= await bcrypt.compare(password,user.password)
        if(!ismatch){
            return res.status(401).json({message:"passwords dont match"})
        }
    }
    catch(err){
        res.status(400).json({error:"there is some problem in authcontroller"})
    }
}


