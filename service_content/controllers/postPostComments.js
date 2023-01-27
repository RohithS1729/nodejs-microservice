const postComments=require("../services/postComments.js")
const postPostComments=(req,res)=>{
    postComments(req,res)
}
module.exports=postPostComments