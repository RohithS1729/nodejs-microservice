const BlogData=require("../modals/postData")

const getSpecificPollsService=(req,res,option)=>{
    try{
        BlogData.find({$and:[{"groupType":option},{type:"poll"}]}).sort({creation:-1}).exec((err,data)=>{
            if(err) res.send(err)
            else{
                res.send(data)
            }
        })
    }
    catch(err){
        res.send('error ================= in getSpecificPollsService file',err)
    }
}
module.exports=getSpecificPollsService