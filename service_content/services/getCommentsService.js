const ReactionData=require('../modals/reactionsData')

const getCommentsService=(req,res)=>{
    ReactionData.find({$and:[
        {
            comment:{$exists:true}

        },{

            postId:req.query.postId
        }
    ]
    }).exec((err,data)=>{
        if(err){
            res.send({err})
        }
        else if(data.length>0){
            res.send(data)
        }
        else{
            res.send('0')
        }
        
    })
}
module.exports=getCommentsService