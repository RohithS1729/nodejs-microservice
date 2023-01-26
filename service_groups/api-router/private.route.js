const route=require('express').Router()

const groupsGetNamesController=require("../controllers/groupsGetNameController")
const createGroupController=require("../controllers/createGroupController")
const getPostsGroupsController=require("../controllers/getPostsGroupsController")


route.post('/create',createGroupController)
route.get('/profile',getPostsGroupsController)
route.get('/',groupsGetNamesController)

module.exports=route