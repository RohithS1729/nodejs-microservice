const route=require('express').Router()

const postVote=require("../controllers/postVote")
const getVote=require("../controllers/getVote")
const postModifyVote=require('../controllers/postModifyVote')



route.post('/polls/vote',postVote)
route.post('/polls/vote/modify',postModifyVote)
route.get('/polls/vote',getVote)




module.exports=route