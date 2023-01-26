const BlogData=require("../modals/postData")


const getPostsService=(req,res)=>{

    if(req.query.getId){
        BlogData.find({_id:req.query.getId}).sort({creation:-1}).exec((err,data)=>{
            if(err) res.send(err)
            else{
                res.send(data)
            }
        })
    }else{
        BlogData.find({"type":"post"}).sort({creation:-1}).exec((err,data)=>{
            if(err) res.send(err)
            else{
                res.send(data)
            }
        })
    }
    // BlogData.find({type:"posts"}).sort({creation:-1}).skip(skipNumber).limit(limitNumber).exec((err,data)=>{
    //     if(err) res.send(err)
    //     else{
    //         res.send(data)
    //     }
    // })
}
module.exports=getPostsService