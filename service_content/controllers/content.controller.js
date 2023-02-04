const {
    deletePollService,
    deletePostsService,
    getSpecificPollsService,
    getPollsService,
    getPostsService,
    getSpecificPostsService,
    postPollsService,
    posting
}=require("../services/content.service")
// const =require("../services/deletePollService")
// const =require("../services/deletePostsService")
// const =require("../services/getSpecificPollsService")
// const =require("../services/getPollsService")
// const =require("../services/getPostsService")
// const =require("../services/getSpecificPostsService.js")
// const =require("../services/postPollsService")
// const =require("../services/postPostsService")


const deletePoll=(req,res)=>{
    
    deletePollService(req,res)

}



const deletePosts=(req,res)=>{
    
    deletePostsService(req,res)

}

const getPolls=(req,res)=>{

    if(req.query.type){
        getSpecificPollsService(req,res,req.query.type)
    }else{
        getPollsService(req,res)

    }
}






const getPosts=(req,res)=>{


    if(req.query.type){
        
        getSpecificPostsService(req,res,req.query.type)
    }else{
        getPostsService(req,res)
    }
   

}
const postPolls=(req,res)=>{
    
    postPollsService(req,res)

}




const postPosts=(req,res)=>{
    
    posting(req,res)

}



module.exports={
    deletePoll,

    deletePosts,
    getPolls,
    getPosts,
    postPolls,

    postPosts
}