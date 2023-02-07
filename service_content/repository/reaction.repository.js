const ReactionData=require('../modals/reactionsData')
const BlogData=require("../modals/postData")
const OptionData=require("../modals/optionsData")
var mongoose = require('mongoose');
const savingData=require('../repository/savingData')

const deleteVoteRepo=async(req,res)=>{
    try{
        let response= await OptionData.findOneAndDelete({$and:[
            {voterId:req.query.voterId},
            {postId:req.query.postId}
        ]})
        if(!response){
            return {
                msg:'no reaction from that user found'
            }
        }else{
            return {
                msg:"deleted",
                unliked:response
            }
        }
    }catch(err){
        return {
            msg:'error ================= in deleteVoteService file',
            error:err
        }
    }
    
    
}
const getVotesRepo=async(req,res)=>{
    try{
        let response = await OptionData.find({    
            postId:req.query.postId
        })
        if(response.length>0){
            return response
        }
        else{
            return '0'
        } 
    }catch(err) {
        return{
            msg:'error ================= in getVotesRepo file',
            error:err
        }
    }


}
const getOptionVoteRepo=async(req,res)=>{
    try{
        let response=await OptionData.find({    
            postId:req.query.postId,
            option:selectedVote
        })
        if(response.length>0){
            return response
        }
        else{
            return '0'
        }  

    }catch(err){
        return {
            msg:'error ================= in getOptionVoteRepo file',
            error:err
        }
    }


}
const postVotesRepo=async(req,res)=>{
    try{
        let response=await  OptionData.find({$and:[
            {voterId:req.body.voterId},
            {postId:req.body.postId}
        ]})
        if(response.length>0){
            return {msg:'already voted'}

        }else{
            let newUser=new OptionData(req.body);
            let date=new Date().toISOString()
            newUser.creation=date
            let saving=await savingData(newUser)
            return saving
            // savingData(newUser)
        }
    }catch(err){
        return {
            msg:'error ================= in postVotesRepo file',
            error:err
        }
    }
   

}
const deleteCommentRepo=async(req,res)=>{
    try{
        let response = await ReactionData.findOneAndDelete({_id:req.query.commentId})
        if(!response){
            return {
                msg:'already deleted or no such comment exist'
            }

        }else{
            return {
                msg:"deleted",
                deletedComment:response
            }
  
        }
    }catch(err){
        return {
            msg:'error ================= in getReactionRepo file',
            error:err
        }
    }
    

}
const deleteReactionsRepo=async(req,res)=>{
    try{
        let response=await ReactionData.findOneAndDelete({$and:[
            {likedBy:req.query.likedBy},
            {postId:req.query.postId}
        ]})
        if(!response){
            return {
                msg:'no reaction from that user found'
            }
         
        }else{
            return{
                msg:"deleted",
                unliked:response
            }
       
        }
    }catch(err){
        return {
            msg:'error ================= in deleteReactionsRepo file',
            error:err
        }
    }
   

}
const getCommentsRepo=async(req,res)=>{
    try{
        let response=await  ReactionData.find({$and:[
            {
                comment:{$exists:true}
    
            },{
    
                postId:req.query.postId
            }
        ]
        })
        if(response.length>0){
            return response
        }
        else{
            return '0'
        }
    }catch(err){
        return {
            msg:'error ================= in getCommentsRepo file',
            error:err
        }
    }
    

}
const getReactionRepo=async(req,res)=>{
    try{
        let response =await ReactionData.find({$and:[
            {
                comment:{$exists:false}
    
            },{
    
                postId:req.query.postId
            }
        ]
        });
        if(response.length>0){
            return response
        }else{
            return '0'
        }
    }catch(err){
        return {
            msg:'error ================= in getReactionRepo file',
            error:err
        }
    }

    // try{
    //     ReactionData.find({$and:[
    //         {comment:{$exists:false}},
    //         {
    //             postId:req.query.postId
    //         }
    //     ]
    //     }).exec((err,data)=>{
    //         if(err){
    //             res.send({err})
    //         }
    //         else if(data.length>0){
    //             // let count=data.length
    //             res.send(data)
    //         }
    //         else{
    //             res.send('0')
    //         }
            
    //     })
    // }
    // catch(err){
    //     res.send('error ================= in getReactionService file',err)
    // }

}
const postCommentsRepo=async(req,res)=>{
    try{
        let response=await ReactionData.create(req.body)
        return {msg:'created',datas:response}
    }catch(err){
        return {
            msg:'error ================= in postCommentsRepo file',
            error:err
        }
    }
   

}
const postReactionsRepo=async(req,res)=>{

    try{
        
        let response =await ReactionData.find({$and:[
            {likedBy:req.likedBy},
            {postId:req.postId}
        ]})

        if(response.length>0){
            return {msg:'already Liked'}
        }else{
            let newUser=new ReactionData(req);
            let date= new Date().toISOString()
            newUser.creation=date
            
            // savingData(newUser,res)
            let uploadNew=await newUser.save()
            if(uploadNew){
                return {
                    msg:'posted',
                    id:uploadNew._id
                }
            }

        }
    }catch(err){
        return {
            msg:'error ================= in postCommentsRepo file',
            error:err
        }
    }


    // try{
    //     ReactionData.find({$and:[
    //         {likedBy:req.body.likedBy},
    //         {postId:req.body.postId}
    //     ]}).exec((err,data)=>{
    //         if(err){
    //             res.send({err})
    //         }
    //         else if(data.length>0){
    
    //             res.send('already Liked')
    //         }
    //         else{
    
    //             let newUser=new ReactionData(req.body);
    //             let date= new Date().toISOString()
    //             newUser.creation=date
                
    //             savingData(newUser,res)
    //         }
            
    //     })
    // }
    // catch(err){
    //     res.send('error ================= in postReactions file',err)
    // }

}













module.exports={
    deleteVoteRepo,
    getVotesRepo,
    getOptionVoteRepo,
    postVotesRepo,
    deleteCommentRepo,
    deleteReactionsRepo,
    getCommentsRepo,
    getReactionRepo,
    postCommentsRepo,
    postReactionsRepo

}