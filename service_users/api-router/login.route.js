const route=require('express').Router()
const {loginController}=require("../controllers/users.controller")

route.post('/',loginController)



module.exports=route