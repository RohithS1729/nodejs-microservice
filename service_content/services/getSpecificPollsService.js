const BlogData=require("../modals/postData")

const getSpecificPollsService=(req,res,option)=>{
    BlogData.find({$and:[{"groupType":option},{type:"poll"}]}).sort({creation:-1}).exec((err,data)=>{
        if(err) res.send(err)
        else{
            res.send(data)
        }
    })
}
module.exports=getSpecificPollsService