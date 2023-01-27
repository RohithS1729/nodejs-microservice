const route=require('express').Router()

const getPolls=require("../controllers/getPolls")
const postPolls=require("../controllers/postPolls")
const deletePoll=require("../controllers/deletePoll")

const getPollVotes=require("../controllers/getPollVotes")
const postPollVotes=require("../controllers/postPollVotes")
const deletePollVote=require("../controllers/deletePollVote")





route.get('/',getPolls)
route.post('/',postPolls)
route.delete('/',deletePoll)

route.get('/vote',getPollVotes)
route.post('/vote',postPollVotes)
route.delete('/vote',deletePollVote)

module.exports=route