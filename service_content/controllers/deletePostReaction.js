const deleteReactions=require("../services/deleteReactions")

const deletePostReaction=(req,res)=>{
    deleteReactions(req,res)
}
module.exports=deletePostReaction