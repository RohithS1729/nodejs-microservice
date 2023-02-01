const BlogData=require("../modals/postData")
var mongoose = require('mongoose');

const getPollsService=(req,res)=>{
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
                        $match:{"type":"poll"}
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
        res.send('error ================= in getPollsService file',err)
    }
}

module.exports= getPollsService

// try{
//     if(req.query.getId){
//         BlogData.find({_id:req.query.getId}).sort({creation:-1}).exec((err,data)=>{
//             if(err) res.send(err)
//             else{
//                 res.send(data)
//             }
//         })
//     }else{
//         BlogData.find({"type":"poll"},{title:1,userId:1,groupId:1,options:1}).sort({creation:-1}).exec((err,data)=>{

//             if(err) res.send(err)
//             else{
//                 res.send(data)
//             }
//         })
//     }
// }
// catch(err){
//     res.send('error ================= in getPollsService file',err)
// }