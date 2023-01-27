const getVotesService=require("../services/getVotesService.js")
const getOptionVoteService=require("../services/getOptionVoteService.js")
const getPollVotes=(req,res)=>{
    if(req.query.option){
        getOptionVoteService(req,res,req.query.option)
    }else{

        getVotesService(req,res)
    }
}
module.exports=getPollVotes