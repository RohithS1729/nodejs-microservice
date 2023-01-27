const ReactionData=require('../modals/reactionsData')

const deleteComment=(req,res)=>{
    ReactionData.findOneAndDelete({_id:req.query.commentId}).exec((err,data)=>{
        if(err){
            res.send({err})
        }
        else{
            res.send({msg:"deleted",datas:data})
        }
        
    })
}
module.exports=deleteComment