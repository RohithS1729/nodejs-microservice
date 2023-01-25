const userData = require("../modals/userData")


const getProfileInfo=(req,res)=>{
    // console.log(req.query.id)



    userData.findOne({_id:req.query.id},{"password":0}).exec((err,data)=>{
        if(err){
            console.log('error')
            res.send(err)
        }else{
            res.send(data)
        }
    })  

}
module.exports=getProfileInfo