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
    console.log(req.body)
    if(req.files){
        const file=req.files.media;

    cloudinary.uploader.upload(file.tempFilePath,(err,data)=>{

        if(err){
            console.log(err)
        }else{
            let date=new Date().toISOString()
            let newBlog=new BlogData()
            newBlog.title=req.query.title
            newBlog.imageUrl=data.url
            newBlog.creation=date
            newBlog.type=req.query.type
            if(req.query.groupId){

                newBlog.userId=req.query.userId
                newBlog.groupId=req.query.groupId
                newBlog.groupType=req.query.groupType
            }else {
                newBlog.groupId=req.query.userId
                
            }
            
            
            newBlog.save((err,data)=>{
                if(err){
                    res.send(err)
                }else{
                    res.send('posted')
                }
            })
        }

    })
    }else{
        let date= new Date().toISOString()
        let newBlog=new BlogData(req.body)
        newBlog.creation=date
        // newBlog.type=req.query.type

        // if(req.query.groupId){

        //         newBlog.userId=req.query.userId
        //         newBlog.groupId=req.query.groupId
        //         newBlog.groupType=req.query.groupType
        // }else {
        //         newBlog.groupId=req.query.userId
                
        //     }



        // if(req.query.type==='post'){
        // newBlog.title=req.query.title
        // newBlog.options=req.query.options
        // }
        // else{
        //     newBlog.title=req.body.title;
        //     newBlog.selected=''
        //     newBlog.counter={
        //         yes:0,
        //         no:0
        //     }

        // }



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