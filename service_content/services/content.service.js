const {
    deletePollRepo,
    deletePostsRepo,
    getSpecificPollsRepo,
    getPollsSpecificRepo,
    getPollsAllRepo,
    getPostsSpecificRepo,
    getPostsAllRepo,
    getSpecificPostsRepo
}=require("../repository/content.repository")
const cloudinary = require('cloudinary').v2



const deletePollService=async(req,res)=>{
    try{
        let result=await deletePollRepo(req,res)
        return result
    }
    catch(err){
        return {
            msg:'error ================= in deletePollService file',
            error:err
        }
    }

}
const deletePostsService=async(req,res)=>{
    try{
        let result=await deletePostsRepo(req,res)
        return result
    }
    catch(err){
        return {
            msg:'error ================= in deletePostsService file',
            error:err
        }
    }
    
}
const getSpecificPollsService=async(req,res,option)=>{
    try{
        let result=await getSpecificPollsRepo(req,res,option)
        return result
    }
    catch(err){
        return {
            msg:'error ================= in getSpecificPollsService file',
            error:err
        }
    }

}

const getPollsService=async(req,res)=>{
    
    try{
        if(req.query.getId){
            let result=await getPollsSpecificRepo(req,res)
            return result
        }else{
            let result=await getPollsAllRepo(req,res)
            return result

        }
    }
    catch(err){
        return {
            msg:'error ================= in getPollsService file',
            error:err
        }
    }
}
const getPostsService=async(req,res)=>{
    try{
        if(req.query.getId){
            let result=await getPostsSpecificRepo(req,res)
            return result
            
        }else{
            let result=await getPostsAllRepo(req,res)
            return result

        }
    }
    catch(err){
        return {
            msg:'error ================= in getPostsService file',
            error:err
        }
    }




}
const getSpecificPostsService=async(req,res,option)=>{
    try{
        let result=await getSpecificPostsRepo(req,res,option)
        return result
    }
    catch(err){
        return {
            msg:'error ================= in getSpecificPostsService file',
            error:err
        }
    }
}
async function postPollsService(req,res){
    
    try{
            let date= new Date().toISOString()
            let newBlog=new BlogData(req.body)
            newBlog.creation=date
    
            
    
            let saving=await savingData(newBlog)
            return saving
    }
    catch(err){
        return {
            msg:'error ================= in postPollsService file',
            error:err
        }
    }






}
async function posting(req,res){
    
    cloudinary.config({ 
        cloud_name: process.env.cloud_name, 
        api_key: process.env.api_key, 
        api_secret: process.env.api_secret,
        secure: process.env.SECURE
      });
    
    
    
        try{
            if(req.files){
                const file=req.files.media;
        
                cloudinary.uploader.upload(file.tempFilePath,{resource_type:"auto"},(err,data)=>{
        
                if(err){
                    res.send(err)
                }else{
                    let date= new Date().toISOString()
                    let newBlog=new BlogData()
                    newBlog.creation=date
                    newBlog.type=req.query.type
            
                    if(req.query.groupId){
            
                            newBlog.userId=req.query.userId
                            newBlog.groupId=req.query.groupId
                            newBlog.groupType=req.query.groupType
                    }else {
                            newBlog.userId=req.query.userId
                            
                    }
            
                    newBlog.title=req.query.title
                    newBlog.imageUrl=data.url
            
            
            
            
            
                    savingData(newBlog,res)
                }
        
            })
            }else{
                let date= new Date().toISOString()
                let newBlog=new BlogData()
                newBlog.creation=date
                newBlog.type=req.query.type
        
                if(req.query.groupId){
        
                        newBlog.userId=req.query.userId
                        newBlog.groupId=req.query.groupId
                        newBlog.groupType=req.query.groupType
                }else {
                        newBlog.userId=req.query.userId
                        
                }
        
                newBlog.title=req.query.title
        
        
        
        
                let saving=await savingData(newBlog)
                return saving
            }
            
        }
        
        catch(err){
            return {
                msg:'error ================= in posting file',
                error:err
            }
        }
    
    
        
    }
    

module.exports={
    deletePollService,
    deletePostsService,
    getSpecificPollsService,
    getPollsService,
    getPostsService,
    getSpecificPostsService,
    postPollsService,
    posting
}
