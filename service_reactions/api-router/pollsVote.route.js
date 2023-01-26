const route=require('express').Router()

const postVote=require("../controllers/postVote")
const getVote=require("../controllers/getVote")
const postModifyVote=require('../controllers/postModifyVote')



route.post('/',postVote)
route.post('/modify',postModifyVote)
route.get('/',getVote)




module.exports=route