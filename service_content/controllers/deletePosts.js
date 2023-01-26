const deletePostsService=require("../services/deletePostsService")
const deletePosts=(req,res)=>{
    
    deletePostsService(req,res)

}
module.exports=deletePosts