const userData = require("../modals/userData")


const profileController=(req,res)=>{
    // console.log("profileController")



    userData.findOne({_id:req.query.userId},{"username":1}).exec((err,data)=>{
        if(err){
            console.log('error')
            res.send(err)
        }else{
            res.send(data)
        }
    })  

}
module.exports=profileController