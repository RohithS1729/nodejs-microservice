
const GroupData=require("../modals/groupData")

const createGroupService=(req,res)=>{



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
            newUser.save((err1,data1)=>{
                if(err1) return res.send(err1)
                else return res.send(data1)
            })
        }
    })

}
module.exports=createGroupService