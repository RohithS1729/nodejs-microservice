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



const getPostReactions=async (req,res)=>{
    try{

        let result=await getReactionService(req,res)
        res.send(result)
    }catch(err){
        return {
            msg:'error ================= in getPostReactions file',
            error:err
        }
    }
}
const postPostReactions=async (req,res)=>{
    try{
        
            let channel=req.channel
            channel.consume("tasks", data => {
                console.log(`Received data at 8000: ${Buffer.from(data.content)}`);
                let req=JSON.parse(data.content)
                postReactions(req)

                channel.ack(data);
            });
  



    }catch(err){
        return err
    }
}
const postPostComments=async(req,res)=>{
    try{

        // let result=await postComments(req,res)
        // res.send(result)
        let channel=req.channel
        channel.consume("tasks", data => {
            console.log(`Received data at 8000: ${Buffer.from(data.content)}`);
            let req=JSON.parse(data.content)
            postComments(req)

            channel.ack(data);
        });
    }catch(err){
        return {
            msg:'error ================= in postPostComments file',
            error:err
        }
    }
    
}
const deletePostReaction=async(req,res)=>{
    try{
        let result=await deleteReactions(req,res)
        res.send(result)

    }catch(err){
        return {
            msg:'error ================= in deletePostReaction file',
            error:err
        }
    }
}
const getPostComments=async(req,res)=>{
    try{
        let result=await getCommentsService(req,res)
        res.send(result)
    }catch(err){
        return {
            msg:'error ================= in getPostComments file',
            error:err
        }
    }
}
const deletePostComment=async(req,res)=>{
    try{
        let result=await deleteComment(req,res)
        res.send(result)
    }catch(err){
        return {
            msg:'error ================= in deletePostComment file',
            error:err
        }
    }
    
}

const getPollVotes=async(req,res)=>{
    try{
        if(req.query.option){
            let result=await getOptionVoteService(req,res)
            res.send(result)
        }else{
            let result=await getVotesService(req,res)
            res.send(result)
        }

    }catch(err){
        return {
            msg:'error ================= in getPollVotes file',
            error:err
        }
    }
}
const postPollVotes=async(req,res)=>{
    try{
        // let result=await postVotesService(req,res)
        // res.send(result)
        let channel=req.channel
        channel.consume("tasks", data => {
            console.log(`Received data at 8000: ${Buffer.from(data.content)}`);
            let req=JSON.parse(data.content)
            postVotesService(req)

            channel.ack(data);
        });

    }catch(err){
        return {
            msg:'error ================= in postPollVotes file',
            error:err
        }
    }
}
const deletePollVote=async(req,res)=>{
    try{

        let result=await deleteVoteService(req,res)
        res.send(result)
    }catch(err){
        return {
            msg:'error ================= in deletePollVote file',
            error:err
        }
    }
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