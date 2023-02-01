const cloudinary = require('cloudinary').v2
const BlogData=require('../modals/postData')
const savingData=require('../repository/savingData')


cloudinary.config({ 
    cloud_name: 'dnxmtemvf', 
    api_key: '491466975142258', 
    api_secret: 'rRbDPkO5-1JuWEgiRW-1y4rZRUU',
    secure: true
  });


function posting(req,res){
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

module.exports=posting