const loginService=require("../services/loginService")
const signUpService=require("../services/signUpService")
const getUserProfile=require("../services/getUserProfile")

const signUpController=(req,res)=>{

    signUpService(req,res)
    


}
const loginController=(req,res)=>{
    loginService(req,res)

}
const userProfile=(req,res)=>{
    getUserProfile(req,res)

}






module.exports= {
    signUpController,loginController,userProfile
}