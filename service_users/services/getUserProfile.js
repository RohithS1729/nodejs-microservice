const UserData=require("../modals/userData")

const loginService=(req,res)=>{
    if(req.query.id){
        UserData.find({_id:req.query.id},{username:1}).exec((err,data)=>{
            if(err) res.send(err)
            else{
                res.send(data)
            }
        })
    }else{
        UserData.find({},{username:1}).exec((err,data)=>{
            if(err) res.send(err)
            else{
                res.send(data)
            }
        })
    }
}
module.exports=loginService