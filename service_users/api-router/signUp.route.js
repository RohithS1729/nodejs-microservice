const route=require('express').Router()
const {signUpController}=require("../controllers/users.controller")

route.post('/',signUpController)

module.exports=route