const UserData = require("../modals/userData")


const savingData=require('../repository/savingData')

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

            savingData(newUser,res)
            // newUser.save((err1,data1)=>{
            //     if(err1) return res.send(err1)
            //     else return res.send(data1)
            // })
            
        }
    })
}
module.exports=signUpService