const ReactionData=require('../modals/reactionsData')

const postComments=(req,res)=>{
    ReactionData.create(req.body,(err,data)=>{
        if(err){
            res.send({err})
        }else{
            res.send({msg:'created',datas:data})
        }
        
    })
}
module.exports=postComments