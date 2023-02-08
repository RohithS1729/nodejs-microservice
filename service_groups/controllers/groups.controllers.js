const {
    getAllPublicGroups,
    getGroupProfileService,
    privateGetGroupService,
    privateGetGroupProfileService,
    createGroupService,
    addfollowerService
    }=require("../services/groups.services")


const getPublicController=async(req,res)=>{
    try{
        let result = await getAllPublicGroups(req,res)
        res.send(result)
        
    }catch(err){
        return {
            msg:'error ================= in getPublicController file',
            error:err
        }
    }    


}

const groupsGetNamesController=async(req,res)=>{     
    try{
        let result = await getGroupProfileService(req,res)
        res.send(result)
        
    }catch(err){
        return {
            msg:'error ================= in groupsGetNamesController file',
            error:err
        }
    }  
}
const privateGetPostsGroupsController=async(req,res)=>{
    try{
        let result = await privateGetGroupService(req,res)
        res.send(result)
        
    }catch(err){
        return {
            msg:'error ================= in privateGetPostsGroupsController file',
            error:err
        }
    }  
}
const privateGroupsGetNamesController=async(req,res)=>{
    try{
        let result = await privateGetGroupProfileService(req,res)
        res.send(result)
        
    }catch(err){
        return {
            msg:'error ================= in privateGroupsGetNamesController file',
            error:err
        }
    }  
}

const createGroupController=async(req,res)=>{
    try{
        let result = await createGroupService(req,res)
        res.send(result)
        
    }catch(err){
        return {
            msg:'error ================= in createGroupController file',
            error:err
        }
    }  
}
const addfollowerController=async(req,res)=>{
    try{
        let result = await addfollowerService(req,res)
        res.send(result)
        
    }catch(err){
        return {
            msg:'error ================= in addfollowerController file',
            error:err
        }
    }  
}

module.exports={
    privateGroupsGetNamesController,
    privateGetPostsGroupsController,
    groupsGetNamesController,
    getPublicController,
    createGroupController,
    addfollowerController
}