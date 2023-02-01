const OptionData=require("../modals/optionsData")

const deleteVoteService=(req,res)=>{
    try{
        OptionData.findOneAndDelete({$and:[
            {voterId:req.query.voterId},
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
        res.send('error ================= in deleteVoteService file',err)
    }
}
module.exports=deleteVoteService