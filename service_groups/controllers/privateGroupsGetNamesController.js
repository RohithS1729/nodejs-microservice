const privateGetGroupProfileService=require("../services/privateGetGroupProfileService")
const privateGroupsGetNamesController=(req,res)=>{
    privateGetGroupProfileService(req,res)
}
module.exports=privateGroupsGetNamesController