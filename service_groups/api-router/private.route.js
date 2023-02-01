const route=require('express').Router()

const {privateGroupsGetNamesController}=require("../controllers/groups.controllers")
const {privateGetPostsGroupsController}=require("../controllers/groups.controllers")


route.get('/profile',privateGroupsGetNamesController)
route.get('/',privateGetPostsGroupsController)

module.exports=route