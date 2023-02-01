const ReactionData=require("../modals/reactionsData")
const savingData=require('../repository/savingData')

const postReactions=(req,res)=>{

    try{
        ReactionData.find({$and:[
            {likedBy:req.body.likedBy},
            {postId:req.body.postId}
        ]}).exec((err,data)=>{
            if(err){
                res.send({err})
            }
            else if(data.length>0){
    
                res.send('already Liked')
            }
            else{
    
                let newUser=new ReactionData(req.body);
                let date= new Date().toISOString()
                newUser.creation=date
                
                savingData(newUser,res)
            }
            
        })
    }
    catch(err){
        res.send('error ================= in postReactions file',err)
    }


}
module.exports=postReactions