const deletePollService=require("../services/deletePollService")
const deleteVoteService=require("../services/deleteVoteService")
const deleteComment=require("../services/deleteComment.js")
const deleteReactions=require("../services/deleteReactions")
const deletePostsService=require("../services/deletePostsService")
const getSpecificPollsService=require("../services/getSpecificPollsService")
const getPollsService=require("../services/getPollsService")
const getVotesService=require("../services/getVotesService.js")
const getOptionVoteService=require("../services/getOptionVoteService.js")
const getCommentsService=require("../services/getCommentsService.js")
const getReactions=require("../services/getReactionService")
const getAllPosts=require("../services/getPostsService")
const getSpecificPostsService=require("../services/getSpecificPostsService.js")
const postPollsService=require("../services/postPollsService")
const postVotesService=require("../services/postVotesService.js")
const postComments=require("../services/postComments.js")
const postReactions=require("../services/postReactions")
const posting=require("../services/postPostsService")


const deletePoll=(req,res)=>{
    
    deletePollService(req,res)

}
const deletePollVote=(req,res)=>{
    deleteVoteService(req,res)
}
const deletePostComment=(req,res)=>{
    deleteComment(req,res)
}

const deletePostReaction=(req,res)=>{
    deleteReactions(req,res)
}
const deletePosts=(req,res)=>{
    
    deletePostsService(req,res)

}

const getPolls=(req,res)=>{

    if(req.query.type){
        getSpecificPollsService(req,res,req.query.type)
    }else{
        getPollsService(req,res)

    }
}

const getPollVotes=(req,res)=>{
    if(req.query.option){
        getOptionVoteService(req,res,req.query.option)
    }else{

        getVotesService(req,res)
    }
}
const getPostComments=(req,res)=>{
    getCommentsService(req,res)
}

const getPostReactions=(req,res)=>{
    getReactions(req,res)
}

const getPosts=(req,res)=>{


    if(req.query.type){
        
        getSpecificPostsService(req,res,req.query.type)
    }else{
        getAllPosts(req,res)
    }
   

}
const postPolls=(req,res)=>{
    
    postPollsService(req,res)

}
const postPollVotes=(req,res)=>{
    postVotesService(req,res)
}
const postPostComments=(req,res)=>{
    postComments(req,res)
}

const postPostReactions=(req,res)=>{
    postReactions(req,res)
}
const postPosts=(req,res)=>{
    
    posting(req,res)

}



module.exports={
    deletePoll,
    deletePollVote,
    deletePostComment,
    deletePostReaction,
    deletePosts,
    getPolls,
    getPollVotes,
    getPostComments,
    getPostReactions,
    getPosts,
    postPolls,
    postPollVotes,
    postPostComments,
    postPostReactions,
    postPosts
}