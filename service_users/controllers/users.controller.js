const {loginService,signUpService,getUserProfile}=require("../services/users.service.js")
// const {}=require("../services/users.service.js")
// const {}=require("../services/users.service.js")

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