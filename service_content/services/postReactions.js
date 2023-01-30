const ReactionData=require("../modals/reactionsData")

const postReactions=(req,res)=>{

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
            
            newUser.save((err1,data1)=>{
                if(err1) res.send(err1)
                else res.send({msg:'posted',datas:data1})
            })
        }
        
    })


}
module.exports=postReactions