const ReactionData=require("../modals/reactionsData")

console.log('postVote')
const postVote=(req,res)=>{
    ReactionData.find({$and:[
        {likedBy:req.query.id},
        {postId:req.query.postId}
    ]}).exec((err,data)=>{
        if(err){
            res.send({err})
        }
        else if(data.length>0){

            res.send('already voted')
        }
        else{

            let newUser=new ReactionData();
            newUser.likedBy=req.query.id
            newUser.postId=req.query.postId
            newUser.selectionOption=req.query.selectionOption

            newUser.save((err,data)=>{
                if(err) res.send(err)
                else res.send('posted poll')
            })
        }
        
    })
}
module.exports=postVote