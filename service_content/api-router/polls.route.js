const route=require('express').Router()

const {getPolls}=require("../controllers/content.controller")
const {postPolls}=require("../controllers/content.controller")
const {deletePoll}=require("../controllers/content.controller")

const {getPollVotes,postPollVotes,deletePollVote}=require("../controllers/reactions.controller")
// const {}=require("../controllers/content.controller")
// const {}=require("../controllers/content.controller")





route.get('/',getPolls)
route.post('/',postPolls)
route.delete('/',deletePoll)

route.get('/vote',getPollVotes)
route.post('/vote',postPollVotes)
route.delete('/vote',deletePollVote)

module.exports=route