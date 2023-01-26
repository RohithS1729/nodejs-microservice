const postPollsService=require("../services/postPollsService")
const postPolls=(req,res)=>{
    
    postPollsService(req,res)

}
module.exports=postPolls
