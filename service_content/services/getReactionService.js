const ReactionData=require('../modals/reactionsData')


const getReactionService=(req,res)=>{
    try{
        ReactionData.find({$and:[
            {
                comment:{$exists:false}
    
            },{
    
                postId:req.query.postId
            }
        ]
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
        res.send('error ================= in getReactionService file',err)
    }

}
module.exports=getReactionService