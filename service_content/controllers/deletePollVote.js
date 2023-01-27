const deleteVoteService=require("../services/deleteVoteService")
const deletePollVote=(req,res)=>{
    deleteVoteService(req,res)
}
module.exports=deletePollVote