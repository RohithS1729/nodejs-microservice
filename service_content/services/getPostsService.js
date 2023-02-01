const BlogData=require("../modals/postData")
// const UserData=require("../modals/userData")
var mongoose = require('mongoose');

const getPostsService=(req,res)=>{

        try{
            if(req.query.getId){
                // let id=req.query.getId
                let id = mongoose.Types.ObjectId(req.query.getId);
                
                BlogData.aggregate(
                    [   
                        {
                            $match:{_id:id}
                        },
                        {
                            $lookup:{
                                from:"data-users",
                                localField:"userId",
                                foreignField:"_id",
                                as:'profileInfo'
                            }
                        }                   
                    ]
                ).exec((err,data)=>{
                    if (err){res.send(err);console.log(err)} 
                    else{
                        console.log(data)
                        res.send(data)
                    }
    
                })
            }else{
                BlogData.aggregate(
                    [   
                        {
                            $match:{"type":"post"}
                        },
                        {
                            $lookup:{
                                from:"data-users",
                                localField:"userId",
                                foreignField:"_id",
                                as:'profileInfo'
                            }
                        }                   
                    ]
                ).exec((err,data)=>{
                    if (err){res.send(err);console.log(err)} 
                    else{
                        console.log(data)
                        res.send(data)
                    }
    
                })
    
            }
        }
        catch(err){
            res.send('error ================= in getPostsService file',err)
        }




}
module.exports=getPostsService

// try{
//     if(req.query.getId){
//         BlogData.find({_id:req.query.getId},{"__v":0}).sort({creation:-1}).exec((err,data)=>{
//             if(err) res.send(err)
//             else{
//                 res.send(data)
//             }
//         })
//     }else{
//         BlogData.find({"type":"post"},{title:1,userId:1,groupId:1,imageUrl:1}).sort({creation:-1}).exec((err,data)=>{
//             if(err) res.send(err)
//             else{
//                 res.send(data)
//             }
//         })
//     }
// }
// catch(err){
//     res.send('error ================= in getPostsService file',err)
// }
