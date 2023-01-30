
const GroupData=require("../modals/groupData")

const getGroupProfileService=(req,res)=>{

    let endpoint= req.baseUrl.split('/')[1] 
    if(endpoint==="Public"){
        GroupData.find({$and:[{_id:req.query.groupId},{GroupPrivacy:"Public"}]}).exec((err,data)=>{
            if (err) res.send(err)
            else res.send(data)
        })

    }else if(endpoint==="Private"){
        GroupData.find({$and:[{_id:req.query.groupId},{GroupPrivacy:"Private"}]}).exec((err,data)=>{
            if (err) res.send(err)
            else res.send(data)
        })

    }

}
module.exports=getGroupProfileService