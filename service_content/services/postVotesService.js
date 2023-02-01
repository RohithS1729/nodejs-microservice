const OptionData=require("../modals/optionsData")
const savingData=require('../repository/savingData')

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
            savingData(newUser,res)
        }
        

    })
}
module.exports=postVotesService