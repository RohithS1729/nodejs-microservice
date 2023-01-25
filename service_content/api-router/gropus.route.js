const route=require('express').Router()
const groupsGetNamesController=require("../controllers/groupsGetNameController")
const createGroupController=require("../controllers/createGroupController")
// const getSelectedGroupController=require("../controllers/getSelectedGroupController")
const getPostsGroupsController=require("../controllers/getPostsGroupsController")

route.post('/create',createGroupController)
// route.get('/:groupId',getSelectedGroupController)

route.get('/profile',getPostsGroupsController)
route.get('/',groupsGetNamesController)

module.exports=route