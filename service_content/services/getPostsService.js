const BlogData=require("../modals/postData")


const getPostsService=(req,res)=>{

    if(req.query.getId){
        BlogData.find({_id:req.query.getId},{"__v":0}).sort({creation:-1}).exec((err,data)=>{
            if(err) res.send(err)
            else{
                res.send(data)
            }
        })
    }else{
        BlogData.find({"type":"post"},{title:1,userId:1,groupId:1,imageUrl:1}).sort({creation:-1}).exec((err,data)=>{
            if(err) res.send(err)
            else{
                res.send(data)
            }
        })
    }

}
module.exports=getPostsService