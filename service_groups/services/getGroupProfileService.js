
const GroupData=require("../modals/groupData")

const getGroupProfileService=(req,res)=>{



    let endpoint= req.baseUrl.split('/')[1] 
    GroupData.find({GroupPrivacy:endpoint}).exec((err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })

}
module.exports=getGroupProfileService