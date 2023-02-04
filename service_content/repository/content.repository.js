const ReactionData=require('../modals/reactionsData')
const BlogData=require("../modals/postData")
const OptionData=require("../modals/optionsData")
var mongoose = require('mongoose');
const savingData=require('../repository/savingData')



const deletePollRepo=(req,res)=>{
    try{
        BlogData.findOneAndDelete({_id:req.query.getId}).exec((err,data)=>{
            if(err) res.send(err)
            else if(!data){
                res.send({
                    msg:'already deleted or no such poll exist'
                })
            }else{
                res.send({
                    msg:"deleted",
                    deletedPoll:data
                })
            }
                
            
        })
    }
    catch(err){
        res.send('error ================= in deletePollService file',err)
    }
}
const deletePostsRepo=(req,res)=>{
    try{
        BlogData.findOneAndDelete({_id:req.query.getId}).exec((err,data)=>{
            if(err) res.send(err)
            else if(!data){
                res.send({
                    msg:'already deleted or no such post exist'
                })
            }else{
                res.send({
                    msg:"deleted",
                    deletedPost:data
                })
            }
    
        })
    }
    catch(err){
        res.send('error ================= in deletePostsService file',err)
    }
}
const getSpecificPollsRepo=(req,res,option)=>{
    try{
        BlogData.find({$and:[{"groupType":option},{type:"poll"}]}).sort({creation:-1}).exec((err,data)=>{
            if(err) res.send(err)
            else{
                res.send(data)
            }
        })
    }
    catch(err){
        res.send('error ================= in getSpecificPollsService file',err)
    }
}
const getPollsSpecificRepo=(req,res)=>{
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
}
const getPollsAllRepo=(req,res)=>{
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
const getPostsSpecificRepo=(req,res)=>{
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
}
const getPostsAllRepo=(req,res)=>{
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
const getSpecificPostsRepo=(req,res,option)=>{
    try{
        BlogData.find({$and:[{"groupType":option},{type:"post"}]}).sort({creation:-1}).exec((err,data)=>{
            if(err) res.send(err)
            else{
                res.send(data)
            }
        })
    }
    catch(err){
        res.send('error ================= in getSpecificPostsService file',err)
    }
}











module.exports={
    deletePollRepo,
    deletePostsRepo,
    getSpecificPollsRepo,
    getPollsSpecificRepo,
    getPollsAllRepo,
    getPostsSpecificRepo,
    getPostsAllRepo,
    getSpecificPostsRepo
    
}