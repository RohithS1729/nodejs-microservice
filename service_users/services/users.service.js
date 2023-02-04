const {signUpRepo,loginRepo,getUsersRepo,getUserProfileRepo}=require("../repository/users.repository")


const signUpService=async(req,res)=>{
    try{
        let result=await signUpRepo(req,res)
        console.log(result)
    }
    catch(err){
        res.send('error ================= in signUpService==============',err)
    }
}
const loginService=async (req,res)=>{
    try{
        let result =await loginRepo(req,res)
        return result       
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