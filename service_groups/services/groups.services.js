const {addFollowerRepo,
    createGroupRepo,
    getPublicGroupsRepo,
    getPublicGroupsProfileRepo,
    privateGetGroupProfileRepo,
    privateGetGroupRepo
}=require("../repository/groups.repository")


const addfollowerService=async(req,res)=>{

    try{
        let result=await addFollowerRepo(req,res)
        return result
    }
    catch(err){
        return {
            msg:'error ================= in addfollowerService file',
            error:err
        }
    }
}
const createGroupService=async(req,res)=>{
    try{
        let result=await createGroupRepo(req,res)
        return result
    }
    catch(err){
        return {
            msg:'error ================= in createGroupService file',
            error:err
        }
    }


}
const getAllPublicGroups=async(req,res)=>{
    try{
        let result=await getPublicGroupsRepo(req,res)
        return result
    }
    catch(err){
        return {
            msg:'error ================= in getAllPublicGroups file',
            error:err
        }
    }
   
      


}
const getGroupProfileService=async(req,res)=>{
    try{
        let result=await getPublicGroupsProfileRepo(req,res)
        return result
    }
    catch(err){
        return {
            msg:'error ================= in getGroupProfileService file',
            error:err
        }
    }
    


}
const privateGetGroupProfileService=async(req,res)=>{
    try{
        let result=await privateGetGroupProfileRepo(req,res)
        return result
    }
    catch(err){
        return {
            msg:'error ================= in privateGetGroupProfileService file',
            error:err
        }
    }


}
const privateGetGroupService=async(req,res)=>{
    try{
        let result=await privateGetGroupRepo(req,res)
        return result
    }
    catch(err){
        return {
            msg:'error ================= in privateGetGroupService file',
            error:err
        }
    }   
}



module.exports={
    addfollowerService,
    createGroupService,
    getAllPublicGroups,
    getGroupProfileService,
    privateGetGroupProfileService,
    privateGetGroupService
}