const route=require('express').Router()

const groupsGetNamesController=require("../controllers/groupsGetNameController")
const createGroupController=require("../controllers/createGroupController")
const getPublicController=require("../controllers/getPublicController")

route.post('/create',createGroupController)

route.get('/profile',groupsGetNamesController)
route.get('/',getPublicController)
module.exports=route