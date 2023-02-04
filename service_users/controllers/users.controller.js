const {loginService,signUpService,getUserProfile}=require("../services/users.service.js")
// const {}=require("../services/users.service.js")
// const {}=require("../services/users.service.js")

const signUpController=(req,res)=>{
    signUpService(req,res)
}
const loginController=async (req,res)=>{
    let result = await loginService(req,res)
    res.send(result)


}
const userProfile=(req,res)=>{
    getUserProfile(req,res)

}






module.exports= {
    signUpController,loginController,userProfile
}