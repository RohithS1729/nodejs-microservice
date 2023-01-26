const getGroupProfileService=require("../services/getGroupProfileService")

const groupsGetNamesController=(req,res)=>{     
    getGroupProfileService(req,res)
    
}
module.exports=groupsGetNamesController