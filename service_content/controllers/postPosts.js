const cloudinary = require('cloudinary').v2
const BlogData=require('../modals/postData')
// const mutler=require('../lib/mutler')


cloudinary.config({ 
    cloud_name: 'dnxmtemvf', 
    api_key: '491466975142258', 
    api_secret: 'rRbDPkO5-1JuWEgiRW-1y4rZRUU',
    secure: true
  });




const postPosts=(req,res)=>{
    
    posting(req,res)
    // cloudinary.uploader.upload(req.file.path,
    //     {
    //         resource_type: "video",
    //         folder: "video",
    //       },
        
    //     (err, result) => {
    //     if (err) {
    //         console.log(err);
    //         return res.status(500).send(err);
    //     }
    //     var upload = new Upload({
    //         name: req.file.originalname,
    //         url: result.url,
    //         cloudinary_id: result.public_id,
    //         description: req.body.description,
    //     });
    //     upload.save((err, result) => {
    //         if (err) {
    //             console.log(err);
    //             return res.status(500).send(err);
    //         }
    //         return res.status(200).send(result);
    //     }
    //     );
    // }
    // );




}
module.exports=postPosts

function posting(req,res){
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
            if(req.query.userId){

                newBlog.userId=req.query.userId
            }else {
                newBlog.groupId=req.query.groupId
                
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
        let newBlog=new BlogData()
        newBlog.creation=date
        newBlog.type=req.query.type

        if(req.query.groupId){

                newBlog.userId=req.query.userId
                newBlog.groupId=req.query.groupId
                newBlog.groupType=req.query.groupType
        }else {
                newBlog.groupId=req.query.userId
                
            }



        if(req.query.type==='post'){
            newBlog.title=req.query.title

        }else{
            newBlog.title=req.body.title;
            newBlog.selected=''
            newBlog.counter={
                yes:0,
                no:0
            }

        }



        newBlog.save((err,data)=>{
            if(err){
                res.send(err)
            }else{
                res.send('posted')
            }
        })
    }
    
    


    
}