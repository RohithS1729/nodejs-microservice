const ReactionData=require('../modals/reactionsData')

const deleteComment=(req,res)=>{
    try{
        ReactionData.findOneAndDelete({_id:req.query.commentId}).exec((err,data)=>{
            if(err){
                res.send({err})
            }else if(!data){
                res.send({
                    msg:'already deleted or no such comment exist'
                })
            }else{
                res.send({
                    msg:"deleted",
                    deletedComment:data
                })
            }
            
        })
    }
    catch(err){
        res.send('error ================= in deleteComment file',err)
    }
}
module.exports=deleteComment