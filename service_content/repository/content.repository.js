const ReactionData=require('../modals/reactionsData')
const BlogData=require("../modals/postData")
const OptionData=require("../modals/optionsData")
var mongoose = require('mongoose');
const savingData=require('../repository/savingData')



const deletePollRepo=async(req,res)=>{
    try{
        let response = await BlogData.findOneAndDelete({_id:req.query.getId})
        if(!response){
            return {
                msg:'already deleted or no such poll exist'
            }
        }else{
            return {
                msg:"deleted",
                deletedPoll:response
            }
     
        }
    }catch(err){
        return {
            msg:'error ================= in deletePollRepo file',
            error:err
        }
    }

}
const deletePostsRepo=async(req,res)=>{
    try{
        let response = await  BlogData.findOneAndDelete({_id:req.query.getId})
        if(!response){
            return {
                msg:'already deleted or no such post exist'
            }
           
        }else{
            return {
                msg:"deleted",
                deletedPost:response
            }
        }
    }catch(err){
        return {
            msg:'error ================= in deletePostsRepo file',
            error:err
        }
    }

}
const getSpecificPollsRepo=async(req,res,option)=>{
    try{
        let response=await BlogData.find({$and:[{"groupType":option},{type:"poll"}]})
        return response
    }catch(err){
        return {
            msg:'error ================= in getSpecificPollsRepo file',
            error:err
        }
    }

}
const getPollsSpecificRepo=async(req,res)=>{
    try{
        let id = mongoose.Types.ObjectId(req.query.getId);
        let response = await BlogData.aggregate(
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
        )
        return response
    }catch(err){
        return {
            msg:'error ================= in getPollsSpecificRepo file',
            error:err
        }
    }

}
const getPollsAllRepo=async(req,res)=>{
    try{
        let response = await BlogData.aggregate(
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
        )
        return response    
    }catch(err){
        return {
            msg:'error ================= in getPollsAllRepo file',
            error:err
        }
    }

}
const getPostsSpecificRepo=async(req,res)=>{
    try{
        let id = mongoose.Types.ObjectId(req.query.getId);
        let response=await  BlogData.aggregate(
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
        )
        return response
    }catch(err){
        return {
            msg:'error ================= in getPollsAllRepo file',
            error:err
        }
    }

}
const getPostsAllRepo=async(req,res)=>{
    try{
        let response = await BlogData.aggregate(
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
        )
        return response
    }catch(err){
        return {
            msg:'error ================= in getPostsAllRepo file',
            error:err
        }
    }

}
const getSpecificPostsRepo=async(req,res,option)=>{
    try{
        let response=await  BlogData.find({$and:[{"groupType":option},{type:"post"}]})
        return response
    }catch(err){
        return {
            msg:'error ================= in getSpecificPostsRepo file',
            error:err
        }
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