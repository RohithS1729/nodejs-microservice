
const GroupData=require("../modals/groupData")

const getGroupProfileService=(req,res)=>{

  
        GroupData.find({$and:[{_id:req.query.groupId},{GroupPrivacy:"Public"}]}).exec((err,data)=>{
            if (err) res.send(err)
            else res.send(data)
        })

    

}
module.exports=getGroupProfileService