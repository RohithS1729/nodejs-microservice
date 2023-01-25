const UserData=require("../modals/userData")

const getHome=(req,res)=>{
    // console.log('here')
    UserData.findOne({_id:req.query.id}).exec((err,data)=>{
        if(err){
            res.send(err)
        }else{
            // console.log(data)
            res.send(data)
        }
    })
    res.send('get home')
}
module.exports=getHome