const BlogData=require("../modals/postData")

const deletePollService=(req,res)=>{
    BlogData.findOneAndDelete({_id:req.query.getId}).exec((err,data)=>{
        if(err) res.send(err)
        else res.send({msg:"deleted",datas:data})
    })
}
module.exports=deletePollService