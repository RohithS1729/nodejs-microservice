const UserData = require("../modals/userData")
const savingData=require('../repository/savingData')

const signUpRepo=(req,res)=>{
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

const loginRepo=(req,res)=>{
    UserData.findOne({username:req.body.username}).exec((err,data)=>{
        if(err){
            res.send(err)
        }else if(!data){
            res.send({
                msg:'No such user found, please sign up!!'
            })
        }else if(data.comparePassword(req.body.password)){
            
                res.send({
                    msg:'logged in',
                    userId:data._id
                })
            }else{
                res.send({
                    msg:'wrong password or username'
                    
                    
                })
            }
        
    })
}
const getUserProfileRepo=(req,res)=>{
    UserData.find({_id:req.query.id},{username:1}).exec((err,data)=>{
        if(err) res.send(err)
        else{
            res.send(data)
        }
    })
}
const getUsersRepo=(req,res)=>{
    UserData.find({},{username:1}).exec((err,data)=>{
        if(err) res.send(err)
        else{
            res.send(data)
        }
    })
}

module.exports={signUpRepo,loginRepo,getUsersRepo,getUserProfileRepo}