const getAllPublicGroups=require("../services/getAllPublicGroups")
const getGroupProfileService=require("../services/getGroupProfileService")
const privateGetGroupService=require("../services/privateGetGroupService")
const privateGetGroupProfileService=require("../services/privateGetGroupProfileService")
const createGroupService=require("../services/createGroupService")
const addfollowerService=require("../services/addfollowerService.js")

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