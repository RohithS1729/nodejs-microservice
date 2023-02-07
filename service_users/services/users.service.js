const {signUpRepo,loginRepo,getUsersRepo,getUserProfileRepo}=require("../repository/users.repository")


const signUpService=async(req,res)=>{
    try{
        let result=await signUpRepo(req,res)
        return result
    }
    catch(err){
        return {
            msg:'error ================= in signUpService file',
            error:err
        }
    }
}
const loginService=async (req,res)=>{
    try{
        let result =await loginRepo(req,res)
        return result       
    }
    catch(err){
        return {
            msg:'error ================= in loginService file',
            error:err
        }
    }
}
const getUserProfile=async(req,res)=>{
    try{
        if(req.query.id){
            
            let result =await getUserProfileRepo(req,res)
            return result  
        }else{
            let result =await getUsersRepo(req,res)
            return result  
            

        }
    }catch(err){
        return {
            msg:'error ================= in getUserProfile file',
            error:err
        }
    }
}
module.exports={signUpService,loginService,getUserProfile}