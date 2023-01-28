const BlogData=require("../modals/postData")

const getSpecificPostsService=(req,res,option)=>{
        console.log(option)
        BlogData.find({$and:[{"groupType":option},{type:"post"}]}).sort({creation:-1}).exec((err,data)=>{
            if(err) res.send(err)
            else{
                res.send(data)
            }
        })
}

module.exports=getSpecificPostsService