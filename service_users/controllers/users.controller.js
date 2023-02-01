const loginService=require("../services/loginService")
const signUpService=require("../services/signUpService")


const signUpController=(req,res)=>{

    signUpService(req,res)
    


}
const loginController=(req,res)=>{
    loginService(req,res)

}
// module.exports=signUpController


// module.exports=loginController





module.exports= {
    signUpController,loginController
}