const GroupData=require("../modals/groupData")

const privateGetGroupService=(req,res)=>{

    GroupData.find({GroupPrivacy:"Private"}).exec((err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })

    
}
module.exports=privateGetGroupService