const {
    deleteVoteService,
    getVotesService,
    getOptionVoteService,
    deleteComment,
    deleteReactions,
    getCommentsService,
    getReactionService,
    postComments,
    postReactions,
    postVotesService


}=require("../services/reaction.service")

// const deleteVoteService=require("../services/deleteVoteService")
// const =require("../services/getVotesService.js")
// const =require("../services/getOptionVoteService.js")
// const =require("../services/postVotesService.js")
// const =require("../services/deleteComment.js")
// const =require("../services/deleteReactions")
// const =require("../services/getCommentsService.js")
// const =require("../services/getReactionService")
// const =require("../services/postComments.js")
// const =require("../services/postReactions")


const getPostReactions=(req,res)=>{
    getReactionService(req,res)
}
const postPostReactions=(req,res)=>{
    postReactions(req,res)
}
const postPostComments=(req,res)=>{
    postComments(req,res)
}
const deletePostReaction=(req,res)=>{
    deleteReactions(req,res)
}
const getPostComments=(req,res)=>{
    getCommentsService(req,res)
}
const deletePostComment=(req,res)=>{
    deleteComment(req,res)
}

const getPollVotes=(req,res)=>{
    if(req.query.option){
        getOptionVoteService(req,res,req.query.option)
    }else{

        getVotesService(req,res)
    }
}
const postPollVotes=(req,res)=>{
    postVotesService(req,res)
}
const deletePollVote=(req,res)=>{
    deleteVoteService(req,res)
}


module.exports={
    deletePollVote,
    getPollVotes,
    postPollVotes,
    deletePostComment,
    deletePostReaction,
    getPostComments,
    getPostReactions,
    postPostComments,
    postPostReactions

}