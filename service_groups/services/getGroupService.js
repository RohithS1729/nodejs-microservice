const BlogData=require("../modals/postData")

const getGroupService=(req,res)=>{



    BlogData.find({groupId:req.query.id}).exec((err,data)=>{
        if(err){
            res.send(err)
        }else{
            
            res.send(data)
        }
    })

}
module.exports=getGroupService