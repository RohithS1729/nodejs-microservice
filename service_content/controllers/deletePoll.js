const deletePollService=require("../services/deletePollService")
const deletePoll=(req,res)=>{
    
    deletePollService(req,res)

}
module.exports=deletePoll