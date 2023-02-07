const {loginService,signUpService,getUserProfile}=require("../services/users.service.js")


const signUpController=async(req,res)=>{
    try{
        let result = await signUpService(req,res)
        res.send(result)
        
    }catch(err){
        return {
            msg:'error ================= in signUpController file',
            error:err
        }
    }
   
}
const loginController=async (req,res)=>{
    try{
        let result = await loginService(req,res)
        res.send(result)
        
    }catch(err){
        return {
            msg:'error ================= in loginController file',
            error:err
        }
    }


}
const userProfile=async(req,res)=>{
    
    try{
        let result = await getUserProfile(req,res)
        res.send(result)
        
    }catch(err){
        return {
            msg:'error ================= in userProfile file',
            error:err
        }
    }
   

}






module.exports= {
    signUpController,loginController,userProfile
}