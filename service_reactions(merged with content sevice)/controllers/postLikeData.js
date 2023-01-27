const ReactionData=require("../modals/reactionsData")

const postLikeData=(req,res)=>{
    ReactionData.find({$and:[
        {likedBy:req.query.id},
        {postId:req.query.postId}
    ]}).exec((err,data)=>{
        if(err){
            res.send({err})
        }
        else if(data.length>0){

            res.send('already Liked')
        }
        else{

            let newUser=new ReactionData();
            newUser.likedBy=req.query.id
            newUser.postId=req.query.postId

            newUser.save((err,data)=>{
                if(err) res.send(err)
                else res.send('posted')
            })
        }
        
    })
}
module.exports=postLikeData