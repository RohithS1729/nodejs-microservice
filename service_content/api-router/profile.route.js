const route=require('express').Router()
const profileController=require("../controllers/profileController")


route.get('/',profileController)

module.exports=route