const {signUpRepo,loginRepo,getUsersRepo,getUserProfileRepo}=require("../repository/users.repository")


const signUpService=(req,res)=>{
    try{
        signUpRepo(req,res)
    }
    catch(err){
        res.send('error ================= in signUpService==============',err)
    }
}
const loginService=(req,res)=>{
    try{
        loginRepo(req,res)
       
    }
    catch(err){
        res.send('error ================= in loginService',err)
    }
}
const getUserProfile=(req,res)=>{
    try{
        if(req.query.id){
            getUserProfileRepo(req,res)
        }else{
            getUsersRepo(req,res)

        }
    }    catch(err){
        res.send('error ================= in getUserProfile',err)
    }
}
module.exports={signUpService,loginService,getUserProfile}