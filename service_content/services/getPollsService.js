const BlogData=require("../modals/postData")

module.exports= getPollsService=(req,res)=>{
    if(req.query.getId){
        BlogData.find({_id:req.query.getId}).sort({creation:-1}).exec((err,data)=>{
            if(err) res.send(err)
            else{
                res.send(data)
            }
        })
    }else{
        BlogData.find({"type":"poll"},{title:1,userId:1,groupId:1,options:1}).sort({creation:-1}).exec((err,data)=>{

            if(err) res.send(err)
            else{
                res.send(data)
            }
        })
    }
}