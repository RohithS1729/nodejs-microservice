const ReactionData=require("../modals/reactionsData")


const deleteLikeCount=(req,res)=>{
    ReactionData.findOneAndDelete({$and:[
        {likedBy:req.query.id},
        {postId:req.query.postId}
    ]}).exec((err,data)=>{
        if(err){
            res.send({err})
        }
        else{
            res.send({
                msg:'deleted'
            })
        }
        
    })
}
module.exports=deleteLikeCount