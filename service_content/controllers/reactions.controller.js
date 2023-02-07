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
//++++++++++++++++++++++++++++++++++++++++++++++
// const amqplib = require('amqplib/callback_api');




//++++++++++++++++++++++++++++++++++++++++++++++++


const getPostReactions= (req,res)=>{
    console.log("controller")
    console.log(req.test)
    getReactionService(req,res)
}
const postPostReactions=async (req,res)=>{
    try{
        console.log('controller post')
        // let result=await postReactions(req,res) //recieved to process
        // res.send(result) //sent response




    }catch(err){
        return err
    }
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