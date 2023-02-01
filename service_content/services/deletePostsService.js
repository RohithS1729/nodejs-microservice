const BlogData=require("../modals/postData")

const deletePostsService=(req,res)=>{
    try{
        BlogData.findOneAndDelete({_id:req.query.getId}).exec((err,data)=>{
            if(err) res.send(err)
            else if(!data){
                res.send({
                    msg:'already deleted or no such post exist'
                })
            }else{
                res.send({
                    msg:"deleted",
                    deletedPost:data
                })
            }
    
        })
    }
    catch(err){
        res.send('error ================= in deletePostsService file',err)
    }
}
module.exports=deletePostsService