const route=require('express').Router()


const {createGroupController}=require("../controllers/groups.controllers")


route.post('/',createGroupController)

module.exports=route