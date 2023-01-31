const route=require('express').Router()

const privateGroupsGetNamesController=require("../controllers/privateGroupsGetNamesController")
const privateGetPostsGroupsController=require("../controllers/privateGetPostsGroupsController")


route.get('/profile',privateGroupsGetNamesController)
route.get('/',privateGetPostsGroupsController)

module.exports=route