const loginService=require("../services/loginService")

const loginController=(req,res)=>{
    loginService(req,res)

}
module.exports=loginController