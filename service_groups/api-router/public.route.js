const route=require('express').Router()

const {groupsGetNamesController}=require("../controllers/groups.controllers")
const {getPublicController}=require("../controllers/groups.controllers")
const {addfollowerController}=require("../controllers/groups.controllers")


route.get('/profile',groupsGetNamesController)
route.get('/',getPublicController)

route.post('/follow',addfollowerController)
module.exports=route