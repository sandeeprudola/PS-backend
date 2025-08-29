const express=require('express')
const emp=require('../models/Emp')
const router=express.Router();
const zod= require('zod')

const signupSchema=zod.object({
    firstName:zod.string(),
    lastName:zo
})

module.exports=router;