const OptionData=require("../modals/optionsData")

const deleteVoteService=(req,res)=>{
    OptionData.findOneAndDelete({$and:[
        {voterId:req.query.voterId},
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
module.exports=deleteVoteService