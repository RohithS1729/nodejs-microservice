const UserData=require("../modals/userData")


const homeOrLogin=(req,res)=>{

    

    UserData.findOne({username:req.body.username}).exec((err,data)=>{
        if(err){
            res.send(err)
        }else if(!data){
            res.send({
                msg:'No such user found, please sign up!!'
            })
        }else{
            if(data.comparePassword(req.body.password)){
                res.send({
                    msg:'logged in',
                    userId:data._id
                })
            }else{
                res.send({
                    msg:'wrong password or username'
                    
                    
                })
            }
        }
    })


    
}
module.exports=homeOrLogin