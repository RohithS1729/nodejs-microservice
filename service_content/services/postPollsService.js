const cloudinary = require('cloudinary').v2
const BlogData=require('../modals/postData')
// const mutler=require('../lib/mutler')


cloudinary.config({ 
    cloud_name: 'dnxmtemvf', 
    api_key: '491466975142258', 
    api_secret: 'rRbDPkO5-1JuWEgiRW-1y4rZRUU',
    secure: true
  });


function postPollsService(req,res){
    if(req.files){
        const file=req.files.media;

    cloudinary.uploader.upload(file.tempFilePath,(err,data)=>{

        let date= new Date().toISOString()
        let newBlog=new BlogData(req.body)
        newBlog.creation=date




        newBlog.save((err,data)=>{
            if(err){
                res.send(err)
            }else{
                res.send({
                    msg:'posted',
                    id:data._id
                })
            }
        })

    })
    }else{
        let date= new Date().toISOString()
        let newBlog=new BlogData(req.body)
        newBlog.creation=date




        newBlog.save((err,data)=>{
            if(err){
                res.send(err)
            }else{
                res.send({
                    msg:'posted',
                    id:data._id
                })
            }
        })
    }
    
    


    
}

module.exports=postPollsService
// module.exports=postPollsService=(req,res)=>{


// }