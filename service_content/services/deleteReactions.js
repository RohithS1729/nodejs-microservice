const ReactionData=require('../modals/reactionsData')

const deleteReactions=(req,res)=>{
    try{
        ReactionData.findOneAndDelete({$and:[
            {likedBy:req.query.likedBy},
            {postId:req.query.postId}
        ]}).exec((err,data)=>{
            if(err){
                res.send({err})
            }else if(!data){
                res.send({
                    msg:'no reaction from that user found'
                })
            }else{
                res.send({
                    msg:"deleted",
                    unliked:data
                })
            }
    
            
        })
    }
    catch(err){
        res.send('error ================= in deleteReactions file',err)
    }
}
module.exports=deleteReactions
