const route=require('express').Router()
const signUpController=require("../controllers/signUpController")

route.post('/',signUpController)

module.exports=route