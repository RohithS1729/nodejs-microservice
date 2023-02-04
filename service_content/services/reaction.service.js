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



const deleteVoteService=(req,res)=>{
    deleteVoteRepo(req,res)

}
const getVotesService=(req,res)=>{

    getVotesRepo(req,res)

}

const getOptionVoteService=(req,res,selectedVote)=>{
    getOptionVoteRepo(req,res)


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
const postReactions=(req,res)=>{
    postReactionsRepo(req,res)




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