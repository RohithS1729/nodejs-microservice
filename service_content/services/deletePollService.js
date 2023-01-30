const BlogData=require("../modals/postData")

const deletePollService=(req,res)=>{
    BlogData.findOneAndDelete({_id:req.query.getId}).exec((err,data)=>{
        if(err) res.send(err)
        else if(!data){
            res.send({
                msg:'already deleted or no such poll exist'
            })
        }else{
            res.send({
                msg:"deleted",
                deletedPoll:data
            })
        }
            
        
    })
}
module.exports=deletePollService