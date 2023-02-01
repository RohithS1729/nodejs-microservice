
const GroupData=require("../modals/groupData")
const savingData=require('../repository/savingData')

const createGroupService=(req,res)=>{

    try{
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
    catch(err){
        res.send('error ================= in createGroupService file',err)
    }


}
module.exports=createGroupService