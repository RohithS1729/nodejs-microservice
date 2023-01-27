const BlogData=require("../modals/postData")
const UserData=require('../modals/userData')
const getAllPosts=require("../services/getPostsService")
const getPosts=(req,res)=>{



    // let limitNumber=req.query.limit;
    // let skipNumber=req.query.page*limitNumber;
    if(req.query.type==="profilePageSelected"){
        // BlogData.find({userId:req.query.getId}).sort({creation:-1}).skip(skipNumber).limit(limitNumber).exec((err,data)=>{
        //     if(err) res.send(err)
        //     else{
        //         res.send(data)
        //     }
        // })
    }else if(req.query.type==="GroupPublic"){

        // BlogData.find({groupType:"groupPublic"}).sort({creation:-1}).skip(skipNumber).limit(limitNumber).exec((err,data)=>{
        //     if(err) {
        //         console.log(err)
        //         res.send(err)
        //     }
        //     else{
        //         res.send(data)
        //     }
        // })
    }else if(req.query.type==="groupProfile"){
        // BlogData.find({groupId:req.query.getId}).sort({creation:-1}).skip(skipNumber).limit(limitNumber).exec((err,data)=>{
        //     if(err) res.send(err)
        //     else{
        //         res.send(data)
        //     }
        // })
        
    }else{
        getAllPosts(req,res)

    }



}
module.exports=getPosts