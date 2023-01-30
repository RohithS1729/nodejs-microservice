const cloudinary = require('cloudinary').v2
const BlogData=require('../modals/postData')


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
    
    
    
    
    
            newBlog.save((err,data1)=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({
                        msg:'posted',
                        id:data1._id
                    })
                }
            })
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





        newBlog.save((err,data2)=>{
            if(err){
                res.send(err)
            }else{
                res.send({
                    msg:'posted',
                    id:data2._id
                })
            }
        })
    }
    
    


    
}

module.exports=posting