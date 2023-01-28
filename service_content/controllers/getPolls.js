
const getSpecificPollsService=require("../services/getSpecificPollsService")
const getPollsService=require("../services/getPollsService")
const getPolls=(req,res)=>{
    // let limitNumber=req.query.limit;
    // let skipNumber=req.query.page*limitNumber;

    if(req.query.type){
        getSpecificPollsService(req,res,req.query.type)
    }else{
        getPollsService(req,res)

    }
    



}
module.exports=getPolls