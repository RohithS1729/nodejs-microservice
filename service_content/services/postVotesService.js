const OptionData=require("../modals/optionsData")
const postVotesService=(req,res)=>{
    OptionData.find({$and:[
        {voterId:req.body.voterId},
        {postId:req.body.postId}
    ]}).exec((err,data)=>{
        if(err){
            res.send(err)
        }else{
            if(data.length>0){
                res.send({msg:'already voted'})
            }else{
                let newUser=new OptionData(req.body);
                let date=new Date().toISOString()
                newUser.creation=date
                newUser.save((err,data1)=>{
                    if(err) res.send(err)
                    else res.send({msg:'voted',datas:data1})
                })
            }
        }
    })
}
module.exports=postVotesService