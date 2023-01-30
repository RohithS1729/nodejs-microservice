const UserData = require("../modals/userData")


const signUpService=(req,res)=>{
    UserData.findOne({username:req.body.username}).exec((err,data)=>{
        if(err){
            res.send(err)
        }else if(data){
            res.send({
                msg:'user already exists'
            })
        }else{
            const newUser= new UserData(req.body);
            newUser.password=newUser.generateHash(req.body.password);

            newUser.save((err,data1)=>{
                if(err) return res.send(err)
                else return res.send(data1)
            })
        }
    })
}
module.exports=signUpService