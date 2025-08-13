const express=require('express')
const {login,register}=require("../controllers/authcontroller")
const router=express.Router();


router.post("/signup",register)
router.post("/signin",login)



module.exports=router;