const Members=require('../modals/groupFollowerData');
const GroupData=require("../modals/groupData")
const savingData=require('../repository/savingData')
const mongoose=require("mongoose")

const addFollowerRepo=async(req,res)=>{
    try{
        let response=await Members.find({$and:[{userId:req.body.userId},{groupId:req.body.groupId}]})
        if(response.length>0){
            return {
                msg:'already followed'
            }
          
        }else{
            const newUser= new Members(req.body);
            let date=new Date().toISOString()
            newUser.creation=date
            let saving=await savingData(newUser)
            return saving

        }
    }catch(err){
        return {
            msg:'error ================= in addFollowerRepo file',
            error:err
        }
    }
   
}
const createGroupRepo=async(req,res)=>{
    try{
        let response=await GroupData.findOne({GroupName:req.body.GroupName})
        if(response){
            return {
                msg:'user already exists'
            }
        }else{
            const newUser= new GroupData(req.body);
            let date=new Date().toISOString()
            newUser.creation=date
            let saving=await savingData(newUser)
            return saving

        }
    }catch(err){
        return {
            msg:'error ================= in addFollowerRepo file',
            error:err
        }
    }

}
const getPublicGroupsRepo=async(req,res)=>{
    try{
        let response=await GroupData.find({GroupPrivacy:"Public"})
        return response

    }catch(err){
        return {
            msg:'error ================= in getPublicGroupsRepo file',
            error:err
        }
    }
    // GroupData.find({GroupPrivacy:"Public"}).exec((err,data)=>{
    //     if(err){
    //         res.send(err)
    //     }else{
    //         res.send(data)
    //     }
    // })
}
const getPublicGroupsProfileRepo=async(req,res)=>{
    try{
        let id = mongoose.Types.ObjectId(req.query.groupId);
        let response=await GroupData.aggregate(
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
        )
        return response
    }catch(err){
        return {
            msg:'error ================= in getPublicGroupsProfileRepo file',
            error:err
        }
    }
    // if(req.query.groupId){
    //     let id = mongoose.Types.ObjectId(req.query.groupId);
        
    //     GroupData.aggregate(
    //         [   
    //             {
    //                 $match:{_id:id}
    //             },
    //             {
    //                 $lookup:{
    //                     from:"data-members",
    //                     localField:"_id",
    //                     foreignField:"groupId",
    //                     as:'members'
    //                 }
    //             }                   
    //         ]
    //     ).exec((err,data)=>{
    //         if (err){res.send(err)} 
    //         else{
    //             res.send(data)
    //         }

    //     })
    // }
    // else{
    //     res.send({msg:'remove /profile'})

    // }
}
const privateGetGroupProfileRepo=async(req,res)=>{
    try{
        let id = mongoose.Types.ObjectId(req.query.groupId);
        let response=await GroupData.aggregate(
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
        )
        return response
    }catch(err){
        return {
            msg:'error ================= in privateGetGroupProfileRepo file',
            error:err
        }
    }
    // if(req.query.groupId){
    //     let id = mongoose.Types.ObjectId(req.query.groupId);
        
    //     GroupData.aggregate(
    //         [   
    //             {
    //                 $match:{_id:id}
    //             },
    //             {
    //                 $lookup:{
    //                     from:"data-members",
    //                     localField:"_id",
    //                     foreignField:"groupId",
    //                     as:'members'
    //                 }
    //             }                   
    //         ]
    //     ).exec((err,data)=>{
    //         if (err){res.send(err)} 
    //         else{
    //             res.send(data)
    //         }

    //     })
    // }
    // else{
    //     res.send({msg:'remove /profile'})

    // }
}
const privateGetGroupRepo=async(req,res)=>{
    try{
        let response = await GroupData.find({GroupPrivacy:"Private"})
        return response
    }catch(err){
        return {
            msg:'error ================= in privateGetGroupRepo file',
            error:err
        }
    }
    // GroupData.find({GroupPrivacy:"Private"}).exec((err,data)=>{
    //     if(err){
    //         res.send(err)
    //     }else{
    //         res.send(data)
    //     }
    // })
}


module.exports={
    addFollowerRepo,
    createGroupRepo,
    getPublicGroupsRepo,
    getPublicGroupsProfileRepo,
    privateGetGroupProfileRepo,
    privateGetGroupRepo
}