const {
    getAllPublicGroups,
    getGroupProfileService,
    privateGetGroupService,
    privateGetGroupProfileService,
    createGroupService,
    addfollowerService
    }=require("../services/groups.services")
// const {}=require("../services/groups.services")
// const {}=require("../services/groups.services")
// const {}=require("../services/groups.services")
// const {}=require("../services/groups.services")
// const {}=require("../services/groups.services")

const getPublicController=(req,res)=>{
    getAllPublicGroups(req,res)
        


}

const groupsGetNamesController=(req,res)=>{     
    getGroupProfileService(req,res)
    
}
const privateGetPostsGroupsController=(req,res)=>{
    privateGetGroupService(req,res)
}
const privateGroupsGetNamesController=(req,res)=>{
    privateGetGroupProfileService(req,res)
}

const createGroupController=(req,res)=>{

    createGroupService(req,res)
    
}
const addfollowerController=(req,res)=>{
    addfollowerService(req,res)
}

module.exports={
    privateGroupsGetNamesController,
    privateGetPostsGroupsController,
    groupsGetNamesController,
    getPublicController,
    createGroupController,
    addfollowerController
}