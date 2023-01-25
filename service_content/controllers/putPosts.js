const BlogData=require('../modals/postData')

const putPosts=(req,res)=>{
    console.log("putPosts")
    if(req.query.option==='yes'){
        BlogData.updateOne({_id:req.query.blogId},{$inc:{"counter.yes":1},$set:{"selected":req.query.option}}).exec((err,data)=>{
            if(err){
                res.send(err)
            }else{console.log(data);
                res.send({
                    msg:'updated'
                })
            }
        })
    }else{
        BlogData.updateOne({_id:req.query.blogId},{$inc:{"counter.no":1},$set:{"selected":req.query.option}}).exec((err,data)=>{
            if(err){
                res.send(err)
            }else{console.log(data);
                res.send({
                    msg:'updated'
                })
            }
        })
    }
}
module.exports=putPosts
