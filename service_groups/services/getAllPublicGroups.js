
const GroupData=require("../modals/groupData")

const getAllPublicGroups=(req,res)=>{

    GroupData.find({GroupPrivacy:"Public"}).exec((err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })

}
module.exports=getAllPublicGroups