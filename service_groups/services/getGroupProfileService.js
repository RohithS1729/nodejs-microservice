const mongoose=require("mongoose")
const GroupData=require("../modals/groupData")

const getGroupProfileService=(req,res)=>{
    try{
        if(req.query.groupId){
            let id = mongoose.Types.ObjectId(req.query.groupId);
            
            GroupData.aggregate(
                [   
                    {
                        $match:{_id:id}
                    },
                    {
                        $lookup:{
                            from:"data-members",
                            localField:"_id",
                            foreignField:"groupId",
                            as:'members'
                        }
                    }                   
                ]
            ).exec((err,data)=>{
                if (err){res.send(err)} 
                else{
                    res.send(data)
                }
    
            })
        }
        else{
            res.send({msg:'remove /profile'})
    
        }
    }
    catch(err){
        res.send('error ================= in getPollsService file',err)
    }
    







    

}
module.exports=getGroupProfileService

