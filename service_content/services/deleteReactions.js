const ReactionData=require('../modals/reactionsData')

const deleteReactions=(req,res)=>{
    ReactionData.findOneAndDelete({$and:[
        {likedBy:req.query.likedBy},
        {postId:req.query.postId}
    ]}).exec((err,data)=>{
        if(err){
            res.send({err})
        }
        else{
            res.send({msg:"deleted",datas:data})
        }
        
    })
}
module.exports=deleteReactions