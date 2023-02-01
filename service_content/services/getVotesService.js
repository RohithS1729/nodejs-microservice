const OptionData=require("../modals/optionsData")

const getVotesService=(req,res)=>{
    try{
        OptionData.find({    
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
    catch(err){
        res.send('error ================= in getVotesService file',err)
    }
}
module.exports=getVotesService