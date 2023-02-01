const route=require('express').Router()


const {createGroupController}=require("../controllers/groups.controllers")
const {addfollowerController}=require("../controllers/groups.controllers")


route.post('/create',createGroupController)
route.post('/follow',addfollowerController)

module.exports=route