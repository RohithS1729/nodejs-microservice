const getAllPublicGroups=require("../services/getAllPublicGroups")
const getPublicController=(req,res)=>{
    getAllPublicGroups(req,res)
        


}
module.exports=getPublicController