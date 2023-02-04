const {addFollowerRepo,
    createGroupRepo,
    getPublicGroupsRepo,
    getPublicGroupsProfileRepo,
    privateGetGroupProfileRepo,
    privateGetGroupRepo
}=require("../repository/groups.repository")


const addfollowerService=(req,res)=>{
    try{ 
        addFollowerRepo(req,res)
        

    }
    catch(err){
        res.send('error ================= in addfollowerService file',err)
    }
}
const createGroupService=(req,res)=>{
    try{
        createGroupRepo(req,res)
        
    }
    catch(err){
        res.send('error ================= in createGroupService file',err)
    }


}
const getAllPublicGroups=(req,res)=>{

    // try{
        getPublicGroupsRepo(req,res)

    // }
    // catch(err){
    //     res.send('error ================= in getAllPublicGroups file',err)
    // }

}
const getGroupProfileService=(req,res)=>{
    try{
        getPublicGroupsProfileRepo(req,res)
    }
    catch(err){
        res.send('error ================= in getPollsService file',err)
    }
    


}
const privateGetGroupProfileService=(req,res)=>{

    try{
        privateGetGroupProfileRepo(req,res)
        
    }
    catch(err){
        res.send('error ================= in getPollsService file',err)
    }



}
const privateGetGroupService=(req,res)=>{

    try{
        privateGetGroupRepo(req,res)

    }
    catch(err){
        res.send('error ================= in privateGetGroupService file',err)
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