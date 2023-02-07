const {
    deleteVoteRepo,
    getVotesRepo,
    getOptionVoteRepo,
    postVotesRepo,
    deleteCommentRepo,
    deleteReactionsRepo,
    getCommentsRepo,
    getReactionRepo,
    postCommentsRepo,
    postReactionsRepo
} = require("../repository/reaction.repository")

//+++++++++++++++++++++++++++++++++


//++++++++++++++++++++++++++++++++++

const deleteVoteService=(req,res)=>{
    deleteVoteRepo(req,res)

}
const getVotesService=(req,res)=>{

    getVotesRepo(req,res)

}

const getOptionVoteService=(req,res,selectedVote)=>{
    getOptionVoteRepo(req,res,selectedVote)


}
const postVotesService=(req,res)=>{
    postVotesRepo(req,res)


}
const deleteComment=(req,res)=>{
    deleteCommentRepo(req,res)

}
const deleteReactions=(req,res)=>{
    deleteReactionsRepo(req,res)

}
const getCommentsService=(req,res)=>{
    getCommentsRepo(req,res)

}
const getReactionService=(req,res)=>{
    getReactionRepo(req,res)


}
const postComments=(req,res)=>{
    postCommentsRepo(req,res)

}
const postReactions=async (bufferData)=>{
    try{
        let req=JSON.parse(bufferData.content)
        console.log(req,'req')
        let response=await postReactionsRepo(req)
        console.log(response)
        return response
    }catch(err){
        return err
    }




}


module.exports={
    deleteVoteService,
    getVotesService,
    getOptionVoteService,
    postVotesService,
    deleteComment,
    deleteReactions,
    getCommentsService,
    getReactionService,
    postComments,
    postReactions,

}