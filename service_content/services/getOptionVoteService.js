const OptionData=require("../modals/optionsData")

const getOptionVoteService=(req,res,selectedVote)=>{
    try{
        OptionData.find({    
            postId:req.query.postId,
            option:selectedVote
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
    catch(err){
        res.send('error ================= in getOptionVoteService file',err)
    }

}
module.exports=getOptionVoteService