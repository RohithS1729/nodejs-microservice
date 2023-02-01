const UserData = require("../modals/userData")


const savingData=require('../repository/savingData')

const signUpService=(req,res)=>{
    try{
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
    
                
            }
        })
    }
    catch(err){
        res.send('error ================= in signUpService==============',err)
    }
}
module.exports=signUpService