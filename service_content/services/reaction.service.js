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

const deleteVoteService=async(req,res)=>{
    
    try{
        let response=await  deleteVoteRepo(req)
        return response
    }catch(err){
        return err
    }
}
const getVotesService=async(req,res)=>{

    
    try{
        let response=await  getVotesRepo(req)
        return response
    }catch(err){
        return err
    }
}

const getOptionVoteService=async(req,res,selectedVote)=>{
    
    try{
        let response=await  getOptionVoteRepo(req,selectedVote)
        return response
    }catch(err){
        return err
    }

}
const postVotesService=async(req,res)=>{
    
    try{
        let response=await  postVotesRepo(req)
        console.log(response)
        return response
    }catch(err){
        return err
    }

}
const deleteComment=async(req,res)=>{
    
    try{
        let response=await  deleteCommentRepo(req)
        return response
    }catch(err){
        return err
    }

}
const deleteReactions=async(req,res)=>{
    
    try{
        let response=await  deleteReactionsRepo(req)
        return response
    }catch(err){
        return err
    }

}
const getCommentsService=async(req,res)=>{
    
    try{
        let response=await  getCommentsRepo(req)
        return response
    }catch(err){
        return err
    }

}
const getReactionService=async(req,res)=>{
   
    try{
        let response=await  getReactionRepo(req)
        return response
    }catch(err){
        return err
    }


}
const postComments=async(req,res)=>{
   
    try{
        let response=await  postCommentsRepo(req)
        return response
    }catch(err){
        return err
    }
}
const postReactions=async (req)=>{
    try{
        // let req=JSON.parse(bufferData.content)
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