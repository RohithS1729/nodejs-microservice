const ReactionData=require('../modals/reactionsData')

const deleteComment=(req,res)=>{
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
        // else{
        //     if(!data){

        //     }else{

        //     }
        // }
        
    })
}
module.exports=deleteComment