const route=require('express').Router()


const createGroupController=require("../controllers/createGroupController")


route.post('/',createGroupController)

module.exports=route