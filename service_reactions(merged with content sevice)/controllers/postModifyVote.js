const ReactionData=require("../modals/reactionsData")


const postModifyVote=(req,res)=>{
    if(req.query.changedTo==='yes'){
        ReactionData.updateOne({$and:[
            {likedBy:req.query.id},
            {postId:req.query.postId}
        ]},{$set:{"selectionOption":req.query.changedTo}}).exec((err,data)=>{
            if(err){
                res.send(err)
            }else{console.log("postModifyVote");
                res.send({
                    msg:'modified'
                })
            }
        })
    }else{
        ReactionData.updateOne({$and:[
            {likedBy:req.query.id},
            {postId:req.query.postId}
        ]},{$set:{"selectionOption":req.query.changedTo}}).exec((err,data)=>{
            if(err){
                res.send(err)
            }else{console.log("postModifyVote");
                res.send({
                    msg:'modified'
                })
            }
        })
    }
}
module.exports=postModifyVote