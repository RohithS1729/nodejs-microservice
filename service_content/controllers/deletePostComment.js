const deleteComment=require("../services/deleteComment.js")
const deletePostComment=(req,res)=>{
    deleteComment(req,res)
}
module.exports=deletePostComment