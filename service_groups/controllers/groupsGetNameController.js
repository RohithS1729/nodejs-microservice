const GroupData=require("../modals/groupData")

const groupsGetNamesController=(req,res)=>{
    
        
        GroupData.find({}).exec((err,data)=>{
            if(err){
                res.send(err)
            }else{
                
                res.send(data)
            }
        })
    
}
module.exports=groupsGetNamesController