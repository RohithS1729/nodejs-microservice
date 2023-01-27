const postReactions=require("../services/postReactions")

const postPostReactions=(req,res)=>{
    postReactions(req,res)
}
module.exports=postPostReactions