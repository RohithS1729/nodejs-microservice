const Members=require('../modals/groupFollowerData')
const savingData=require('../repository/savingData')

const addfollowerService=(req,res)=>{
    try{ 

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
    catch(err){
        res.send('error ================= in addfollowerService file',err)
    }
}
module.exports=addfollowerService

