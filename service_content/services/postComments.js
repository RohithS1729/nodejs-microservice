const ReactionData=require('../modals/reactionsData')

const postComments=(req,res)=>{
    try{
        ReactionData.create(req.body,(err,data)=>{
            if(err){
                res.send({err})
            }else{
                res.send({msg:'created',datas:data})
            }
            
        })
    }
    catch(err){
        res.send('error ================= in postComments file',err)
    }
}
module.exports=postComments