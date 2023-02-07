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


const getPostReactions=async (req,res)=>{
    let result=await getReactionService(req,res)
    res.send(result)
}
const postPostReactions=async (req,res)=>{
    try{
     
        console.log('post like ')
        // let result=await postReactions(req,res) //recieved to process
        // res.send(result) //sent response




    }catch(err){
        return err
    }
}
const postPostComments=async(req,res)=>{
    let result=await postComments(req,res)
    res.send(result)
    
}
const deletePostReaction=async(req,res)=>{
    let result=await deleteReactions(req,res)
    res.send(result)
    
}
const getPostComments=async(req,res)=>{
    let result=await getCommentsService(req,res)
    res.send(result)
}
const deletePostComment=async(req,res)=>{
    let result=await deleteComment(req,res)
    res.send(result)
    
}

const getPollVotes=async(req,res)=>{
    if(req.query.option){
        let result=await getOptionVoteService(req,res)
        res.send(result)
    }else{
        let result=await getVotesService(req,res)
        res.send(result)
    }
}
const postPollVotes=async(req,res)=>{
    let result=await postVotesService(req,res)
    res.send(result)
}
const deletePollVote=async(req,res)=>{
    let result=await deleteVoteService(req,res)
    res.send(result)
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