const Members=require('../modals/groupFollowerData');
const GroupData=require("../modals/groupData")
const savingData=require('../repository/savingData')
const mongoose=require("mongoose")

const addFollowerRepo=(req,res)=>{
    Members.find({$and:[{userId:req.body.userId},{groupId:req.body.groupId}]}).exec((err,data)=>{
        if(err){
            res.send(err)
        }else if(data.length>0){
            res.send({
                msg:'already followed'
            })
        }else{
            const newUser= new Members(req.body);
            let date=new Date().toISOString()
            newUser.creation=date
            savingData(newUser,res)

        }
    })
}
const createGroupRepo=(req,res)=>{
    GroupData.findOne({GroupName:req.body.GroupName}).exec((err,data)=>{
        if(err){
            res.send(err)
        }else if(data){
            res.send({
                msg:'user already exists'
            })
        }else{
            const newUser= new GroupData(req.body);
            let date=new Date().toISOString()
            newUser.creation=date

            savingData(newUser,res)

        }
    })
}
const getPublicGroupsRepo=(req,res)=>{
    GroupData.find({GroupPrivacy:"Public"}).exec((err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}
const getPublicGroupsProfileRepo=(req,res)=>{
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
const privateGetGroupProfileRepo=(req,res)=>{
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
const privateGetGroupRepo=(req,res)=>{
    GroupData.find({GroupPrivacy:"Private"}).exec((err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}


module.exports={
    addFollowerRepo,
    createGroupRepo,
    getPublicGroupsRepo,
    getPublicGroupsProfileRepo,
    privateGetGroupProfileRepo,
    privateGetGroupRepo
}