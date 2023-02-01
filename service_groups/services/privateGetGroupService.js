const GroupData=require("../modals/groupData")

const privateGetGroupService=(req,res)=>{

    try{
        GroupData.find({GroupPrivacy:"Private"}).exec((err,data)=>{
            if(err){
                res.send(err)
            }else{
                res.send(data)
            }
        })
    }
    catch(err){
        res.send('error ================= in privateGetGroupService file',err)
    }


    
}
module.exports=privateGetGroupService