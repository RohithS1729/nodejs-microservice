const getReactions=require("../services/getReactionService")

const getPostReactions=(req,res)=>{
    getReactions(req,res)
}
module.exports=getPostReactions