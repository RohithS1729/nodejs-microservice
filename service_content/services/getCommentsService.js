const ReactionData=require('../modals/reactionsData')

const getCommentsService=(req,res)=>{
    console.log('herre')
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
            console.log(data)
            res.send('0')
        }
        
    })
}
module.exports=getCommentsService