const express=require('express');
const User = require('../db');
const {JWT_SECRET}=require("../config")
const router=express.Router();

const signupSchema=zod.object({
    username:zod.string(),
    password:zod.string(),
    firstName:zod.string(),
    lastName:zod.string(),
    role:zod.string()
})

router.post("/signup",async(req,res)=>{
    const body=req.body;
    const {success}=signupSchema.safeParse(body);
    if(!success){
        return res.status(411).json({message: "email taken /wrong credentials"})
    }
    const existinguser=await User.findOne({
        username:req.body.username
    })
    if(existinguser){
        return res.status(411).json("email already taken/ incorrect credentials")
    }
    const hashedpassword= await bcrypt.hash(password,10);
    const user=new User({
        username,
        password: hashedpassword,
        firstName,
        lastName,
        role
    })

    await user.save();
    const token=jwt.sign({
        userId:user._id,
        role:user.role
    },JWT_SECRET)

    res.status(200).json({message:"user created successfully",token})

})


 const signinSchema=zod.object({
    username:zod.string(),
    password
 })

router.post("/signin",)



module.exports=router;