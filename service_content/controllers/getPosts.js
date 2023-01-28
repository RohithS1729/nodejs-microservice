
const getAllPosts=require("../services/getPostsService")
const getSpecificPostsService=require("../services/getSpecificPostsService.js")
const getPosts=(req,res)=>{


    if(req.query.type){
        
        getSpecificPostsService(req,res,req.query.type)
    }else{
        getAllPosts(req,res)
    }
   

}
module.exports=getPosts