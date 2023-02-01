
const GroupData=require("../modals/groupData")

const getAllPublicGroups=(req,res)=>{

    try{
        GroupData.find({GroupPrivacy:"Public"}).exec((err,data)=>{
            if(err){
                res.send(err)
            }else{
                res.send(data)
            }
        })
    }
    catch(err){
        res.send('error ================= in getAllPublicGroups file',err)
    }

}
module.exports=getAllPublicGroups
