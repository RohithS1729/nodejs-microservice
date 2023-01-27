const getCommentsService=require("../services/getCommentsService.js")
const getPostComments=(req,res)=>{
    getCommentsService(req,res)
}
module.exports=getPostComments