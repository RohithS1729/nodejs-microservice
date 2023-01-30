const OptionData=require("../modals/optionsData")
const postVotesService=(req,res)=>{
    OptionData.find({$and:[
        {voterId:req.body.voterId},
        {postId:req.body.postId}
    ]}).exec((err,data)=>{
        if(err){
            res.send(err)
        }else if(data.length>0){
            res.send({msg:'already voted'})

        }else{
            let newUser=new OptionData(req.body);
            let date=new Date().toISOString()
            newUser.creation=date
            newUser.save((err1,data1)=>{
                if(err1) res.send(err1)
                else res.send({msg:'voted',datas:data1})
            })
        }
        
        // else{
        //     if(data.length>0){
        //     }else{
                
        //     }
        // }
    })
}
module.exports=postVotesService