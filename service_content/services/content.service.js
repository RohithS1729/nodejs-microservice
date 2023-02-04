




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



const deletePollService=(req,res)=>{
    deletePollRepo(req,res)

}
const deletePostsService=(req,res)=>{
    deletePostsRepo(req,res)
    
}
const getSpecificPollsService=(req,res,option)=>{
    getSpecificPollsRepo(req,res,option)

}

const getPollsService=(req,res)=>{
    
    try{
        if(req.query.getId){
            // let id=req.query.getId
            getPollsSpecificRepo(req,res)
            
        }else{
            getPollsAllRepo(req,res)
            

        }
    }
    catch(err){
        res.send('error ================= in getPollsService file',err)
    }
}
const getPostsService=(req,res)=>{
    try{
        if(req.query.getId){
            // let id=req.query.getId
            getPostsSpecificRepo(req,res)
            
        }else{
            
            getPostsAllRepo(req,res)

        }
    }
    catch(err){
        res.send('error ================= in getPostsService file',err)
    }




}
const getSpecificPostsService=(req,res,option)=>{
    getSpecificPostsRepo(req,res,option)

}
function postPollsService(req,res){
    
    try{
            let date= new Date().toISOString()
            let newBlog=new BlogData(req.body)
            newBlog.creation=date
    
            
    
    
            savingData(newBlog,res)
    }
    catch(err){
            res.send('error ================= in postPollsService file',err)
    }






}
function posting(req,res){
    
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
        
        
        
        
        
                savingData(newBlog,res)
            }
            
        }
        
        catch(err){
            res.send('error ================= in postPostsService file',err)
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
