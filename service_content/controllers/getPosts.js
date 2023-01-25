var mongoose = require('mongoose');
const BlogData=require("../modals/postData")
const UserData=require('../modals/userData')
const getPosts=(req,res)=>{
    let limitNumber=req.query.limit;
    let skipNumber=req.query.page*limitNumber;
    // console.log()
    if(req.query.type==="profilePageSelected"){
        BlogData.find({userId:req.query.getId}).sort({creation:-1}).skip(skipNumber).limit(limitNumber).exec((err,data)=>{
            if(err) res.send(err)
            else{
                res.send(data)
            }
        })
    }else if(req.query.type==="GroupPublic"){
        // console.log('here')
        // groupType:"groupPublic"
        // {$and:[
        //     {groupId:true},
        //     {groupType:'GroupPublic'}
        // ]}
        BlogData.find({groupType:"groupPublic"}).sort({creation:-1}).skip(skipNumber).limit(limitNumber).exec((err,data)=>{
            if(err) {
                console.log(err)
                res.send(err)
            }
            else{
                // console.log(data)
                res.send(data)
            }
        })
    }else if(req.query.type==="groupProfile"){
        BlogData.find({groupId:req.query.getId}).sort({creation:-1}).skip(skipNumber).limit(limitNumber).exec((err,data)=>{
            if(err) res.send(err)
            else{
                res.send(data)
            }
        })
        
    }else{
        BlogData.find({}).sort({creation:-1}).skip(skipNumber).limit(limitNumber).exec((err,data)=>{
            if(err) res.send(err)
            else{
                res.send(data)
            }
        })

    }
    // var id = mongoose.Types.ObjectId(req.query.id);
    // let pipeline=[
    //     {$match:{}},
    //     {$lookup: {
    //         from: "UserData",
    //         localField: "userId",
    //         foreignField: "_id",
    //         as: "creator_details",
    //       }}
    // ]
    // BlogData.aggregate([pipeline]).exec((err,data)=>{
    //     if(err){
    //         console.log('errrrrrrrrrrrrr',err)
    //     }else{
    //         console.log(data)
    //         res.send(data)
    //     }
    // })
    // res.send({msg:'test'})


}
module.exports=getPosts