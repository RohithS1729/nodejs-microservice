const route=require('express').Router()

const groupsGetNamesController=require("../controllers/groupsGetNameController")
const createGroupController=require("../controllers/createGroupController")

route.post('/create',createGroupController)

route.get('/profile',groupsGetNamesController)
module.exports=route