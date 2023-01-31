const GroupData=require("../modals/groupData")
const privateGetGroupProfileService=(req,res)=>{
    GroupData.find({$and:[{_id:req.query.groupId},{GroupPrivacy:"Private"}]}).exec((err,data)=>{
        if (err) res.send(err)
        else res.send(data)
    })
}
module.exports=privateGetGroupProfileService