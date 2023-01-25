const signUpService=require("../services/signUpService")

const signUpController=(req,res)=>{

    signUpService(req,res)
    


}
module.exports=signUpController