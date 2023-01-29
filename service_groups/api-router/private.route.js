const route=require('express').Router()

const groupsGetNamesController=require("../controllers/groupsGetNameController")
const createGroupController=require("../controllers/createGroupController")
const getPostsGroupsController=require("../controllers/getPostsGroupsController")


route.get('/profile',groupsGetNamesController)
route.post('/create',createGroupController)
route.get('/',getPostsGroupsController)

module.exports=route