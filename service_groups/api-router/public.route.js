const route=require('express').Router()

const groupsGetNamesController=require("../controllers/groupsGetNameController")
const getPublicController=require("../controllers/getPublicController")


route.get('/profile',groupsGetNamesController)
route.get('/',getPublicController)
module.exports=route