const OptionData=require("../modals/optionsData")

const getOptionVoteService=(req,res,selectedVote)=>{
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
            console.log(data)
            res.send('0')
        }       
    })

}
module.exports=getOptionVoteService