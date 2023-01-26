const route=require('express').Router()

const getPolls=require("../controllers/getPolls")
const postPolls=require("../controllers/postPolls")
const deletePoll=require("../controllers/deletePoll")

route.get('/',getPolls)
route.post('/',postPolls)
route.delete('/',deletePoll)


module.exports=route