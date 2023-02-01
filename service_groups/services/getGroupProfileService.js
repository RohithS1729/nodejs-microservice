const mongoose=require("mongoose")
const GroupData=require("../modals/groupData")

const getGroupProfileService=(req,res)=>{

    try{
        if(req.query.groupId){
            // let id=req.query.groupId
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
                if (err){res.send(err);console.log(err)} 
                else{
                    console.log(data)
                    res.send(data)
                }
    
            })
        }
        // else{
        //     GroupData.aggregate(
        //         [   
        //             {
        //                 $match:{"type":"poll"}
        //             },
        //             {
        //                 $lookup:{
        //                     from:"data-users",
        //                     localField:"userId",
        //                     foreignField:"_id",
        //                     as:'profileInfo'
        //                 }
        //             }                   
        //         ]
        //     ).exec((err,data)=>{
        //         if (err){res.send(err);console.log(err)} 
        //         else{
        //             console.log(data)
        //             res.send(data)
        //         }
    
        //     })
    
        // }
    }
    catch(err){
        res.send('error ================= in getPollsService file',err)
    }
    





    // try{
    //     GroupData.find({$and:[{_id:req.query.groupId},{GroupPrivacy:"Public"}]}).exec((err,data)=>{
    //         if (err) res.send(err)
    //         else res.send(data)
    //     })
    // }
    // catch(err){
    //     res.send('error ================= in getGroupProfileService file',err)
    // }


    

}
module.exports=getGroupProfileService

