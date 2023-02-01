const BlogData=require("../modals/postData")

const getSpecificPostsService=(req,res,option)=>{
    try{
        BlogData.find({$and:[{"groupType":option},{type:"post"}]}).sort({creation:-1}).exec((err,data)=>{
            if(err) res.send(err)
            else{
                res.send(data)
            }
        })
    }
    catch(err){
        res.send('error ================= in getSpecificPostsService file',err)
    }
}

module.exports=getSpecificPostsService