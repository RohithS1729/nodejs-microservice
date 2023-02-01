const GroupData=require("../modals/groupData")
const privateGetGroupProfileService=(req,res)=>{
    try{
        GroupData.find({$and:[{_id:req.query.groupId},{GroupPrivacy:"Private"}]}).exec((err,data)=>{
            if (err) res.send(err)
            else res.send(data)
        })
    }
    catch(err){
        res.send('error ================= in privateGetGroupProfileService file',err)
    }

}
module.exports=privateGetGroupProfileService