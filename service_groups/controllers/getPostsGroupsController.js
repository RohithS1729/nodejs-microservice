const BlogData=require("../modals/postData")


const getPostsGroupsController=(req,res)=>{
    
        
    BlogData.find({groupId:req.query.groupId}).exec((err,data)=>{
        if(err){
            res.send(err)
        }else{
            
            res.send(data)
        }
    })

}
module.exports=getPostsGroupsController