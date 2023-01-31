const privateGetGroupService=require("../services/privateGetGroupService")
const privateGetPostsGroupsController=(req,res)=>{
    privateGetGroupService(req,res)
}
module.exports=privateGetPostsGroupsController