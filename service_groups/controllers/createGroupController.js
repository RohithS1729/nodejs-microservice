const createGroupService=require("../services/createGroupService")

const createGroupController=(req,res)=>{

    createGroupService(req,res)
    
}
module.exports=createGroupController