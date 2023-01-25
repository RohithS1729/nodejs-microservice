const GroupData=require("../modals/groupData")

const createGroupController=(req,res)=>{
    GroupData.findOne({GroupName:req.body.GroupName}).exec((err,data)=>{
        if(err){
            res.send(err)
        }else if(data){
            res.send({
                msg:'user already exists'
            })
        }else{
            const newUser= new GroupData(req.body);

            newUser.save((err,data)=>{
                if(err) return res.send(err)
                else return res.send(newUser)
            })
        }
    })
}
module.exports=createGroupController