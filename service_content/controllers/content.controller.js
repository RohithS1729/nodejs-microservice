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



const deletePoll=async(req,res)=>{
    try{
        let result = await deletePollService(req,res)
        res.send(result)
        
    }catch(err){
        return {
            msg:'error ================= in deletePoll file',
            error:err
        }
    }

}



const deletePosts=async(req,res)=>{
    try{
        let result = await deletePostsService(req,res)
        res.send(result)
        
    }catch(err){
        return {
            msg:'error ================= in deletePosts file',
            error:err
        }
    }
}

const getPolls=async(req,res)=>{
    try{
        if(req.query.type){
            let result = await getSpecificPollsService(req,res,req.query.type)
            res.send(result)
        }else{
            let result = await getPollsService(req,res,req.query.type)
            res.send(result)
    
        }
    }catch(err){
        return {
            msg:'error ================= in getPolls file',
            error:err
        }
    }

}






const getPosts=async(req,res)=>{

    try{
        if(req.query.type){
            let result = await getSpecificPostsService(req,res,req.query.type)
            res.send(result)
        }else{
            let result = await getPostsService(req,res)
            res.send(result)
    
        }
    }catch(err){
        return {
            msg:'error ================= in getPosts file',
            error:err
        }
    }

   

}
const postPolls=async(req,res)=>{
    try{
        let result = await postPollsService(req,res)
        res.send(result)
        
    }catch(err){
        return {
            msg:'error ================= in postPolls file',
            error:err
        }
    }
}




const postPosts=async(req,res)=>{
    try{
        let result = await posting(req,res)
        res.send(result)
        
    }catch(err){
        return {
            msg:'error ================= in postPosts file',
            error:err
        }
    }

}



module.exports={
    deletePoll,

    deletePosts,
    getPolls,
    getPosts,
    postPolls,

    postPosts
}