const BlogData=require('../modals/postData')


const modifyPutPosts=(req,res)=>{
    if(req.query.option==='yes'){
        BlogData.updateOne({_id:req.query.blogId},{$inc:{"counter.yes":1,"counter.no":-1},$set:{"selected":req.query.option}}).exec((err,data)=>{
            if(err){
                res.send(err)
            }else{
                console.log("modifyPutPosts");
                res.send({
                    msg:'modified'
                })
            }
        })
    }else{
        BlogData.updateOne({_id:req.query.blogId},{$inc:{"counter.no":1,"counter.yes":-1},$set:{"selected":req.query.option}}).exec((err,data)=>{
            if(err){
                res.send(err)
            }else{console.log("modifyPutPosts");
                res.send({
                    msg:'modified'
                })
            }
        })
    }
}
module.exports=modifyPutPosts