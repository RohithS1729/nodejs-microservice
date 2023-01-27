const postVotesService=require("../services/postVotesService.js")
const postPollVotes=(req,res)=>{
    postVotesService(req,res)
}
module.exports=postPollVotes