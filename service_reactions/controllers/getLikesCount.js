const ReactionData=require('../modals/reactionsData')
const getLikesCount=(req,res)=>{
    ReactionData.find({
       
        postId:req.query.postId
    }).exec((err,data)=>{
        if(err){
            res.send({err})
        }
        else if(data.length>0){
            // let count=data.length
            res.send(data)
        }
        else{

            res.send('0')
        }
        
    })
}
module.exports=getLikesCount