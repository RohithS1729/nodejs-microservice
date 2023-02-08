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
        // let result=await postReactions(req,res) //recieved to process
        // res.send(result) //sent response
        function channelAccess(channel){
            channel.consume("tasks", data => {
                console.log(`Received data at 8000: ${Buffer.from(data.content)}`);
    
                // if(data){
                //     console.log('call route')
                //     // redirectToRoute(JSON.parse(data.content))
    
                // }
                channel.ack(data);
            });
        }
        channelAccess(req.channel)


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