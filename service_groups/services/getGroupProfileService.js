
const GroupData=require("../modals/groupData")

const getGroupProfileService=(req,res)=>{

  
    try{
        GroupData.find({$and:[{_id:req.query.groupId},{GroupPrivacy:"Public"}]}).exec((err,data)=>{
            if (err) res.send(err)
            else res.send(data)
        })
    }
    catch(err){
        res.send('error ================= in getGroupProfileService file',err)
    }


    

}
module.exports=getGroupProfileService