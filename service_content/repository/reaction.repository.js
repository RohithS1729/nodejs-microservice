const ReactionData=require('../modals/reactionsData')
const BlogData=require("../modals/postData")
const OptionData=require("../modals/optionsData")
var mongoose = require('mongoose');
const savingData=require('../repository/savingData')

const deleteVoteRepo=(req,res)=>{
    try{
        OptionData.findOneAndDelete({$and:[
            {voterId:req.query.voterId},
            {postId:req.query.postId}
        ]}).exec((err,data)=>{
            if(err){
                res.send({err})
            }else if(!data){
                res.send({
                    msg:'no reaction from that user found'
                })
            }else{
                res.send({
                    msg:"deleted",
                    unliked:data
                })
            }
      
        })
    }
    catch(err){
        res.send('error ================= in deleteVoteService file',err)
    }
    
}
const getVotesRepo=(req,res)=>{
    try{
        OptionData.find({    
            postId:req.query.postId
        }).exec((err,data)=>{
            if(err){
                res.send({err})
            }
            else if(data.length>0){
                // let count=data.length
                res.send(data)
            }
            else{
                res.send('0')
            }       
        })
    }
    catch(err){
        res.send('error ================= in getVotesService file',err)
    }

}
const getOptionVoteRepo=(req,res)=>{
    try{
        OptionData.find({    
            postId:req.query.postId,
            option:selectedVote
        }).exec((err,data)=>{
            if(err){
                res.send({err})
            }
            else if(data.length>0){
                // let count=data.length
                res.send(data)
            }
            else{
                res.send('0')
            }       
        })
    }
    catch(err){
        res.send('error ================= in getOptionVoteService file',err)
    }

}
const postVotesRepo=(req,res)=>{
    try{
        OptionData.find({$and:[
            {voterId:req.body.voterId},
            {postId:req.body.postId}
        ]}).exec((err,data)=>{
            if(err){
                res.send(err)
            }else if(data.length>0){
                res.send({msg:'already voted'})
    
            }else{
                let newUser=new OptionData(req.body);
                let date=new Date().toISOString()
                newUser.creation=date
                savingData(newUser,res)
            }
            
    
        })
    }
    catch(err){
        res.send('error ================= in postVotesService file',err)
    }

}
const deleteCommentRepo=(req,res)=>{
    try{
        ReactionData.findOneAndDelete({_id:req.query.commentId}).exec((err,data)=>{
            if(err){
                res.send({err})
            }else if(!data){
                res.send({
                    msg:'already deleted or no such comment exist'
                })
            }else{
                res.send({
                    msg:"deleted",
                    deletedComment:data
                })
            }
            
        })
    }
    catch(err){
        res.send('error ================= in deleteComment file',err)
    }

}
const deleteReactionsRepo=(req,res)=>{
    try{
        ReactionData.findOneAndDelete({$and:[
            {likedBy:req.query.likedBy},
            {postId:req.query.postId}
        ]}).exec((err,data)=>{
            if(err){
                res.send({err})
            }else if(!data){
                res.send({
                    msg:'no reaction from that user found'
                })
            }else{
                res.send({
                    msg:"deleted",
                    unliked:data
                })
            }
    
            
        })
    }
    catch(err){
        res.send('error ================= in deleteReactions file',err)
    }

}
const getCommentsRepo=(req,res)=>{
    try{
        ReactionData.find({$and:[
            {
                comment:{$exists:true}
    
            },{
    
                postId:req.query.postId
            }
        ]
        }).exec((err,data)=>{
            if(err){
                res.send({err})
            }
            else if(data.length>0){
                res.send(data)
            }
            else{
                res.send('0')
            }
            
        })
    }
    catch(err){
        res.send('error ================= in getCommentsService file',err)
    }

}
const getReactionRepo=(req,res)=>{
    try{
        ReactionData.find({$and:[
            {
                comment:{$exists:false}
    
            },{
    
                postId:req.query.postId
            }
        ]
        }).exec((err,data)=>{
            if(err){
                res.send({err})
            }
            else if(data.length>0){
                // let count=data.length
                res.send(data)
            }
            else{
                res.send('0')
            }
            
        })
    }
    catch(err){
        res.send('error ================= in getReactionService file',err)
    }

}
const postCommentsRepo=(req,res)=>{
    try{
        ReactionData.create(req.body,(err,data)=>{
            if(err){
                res.send({err})
            }else{
                res.send({msg:'created',datas:data})
            }
            
        })
    }
    catch(err){
        res.send('error ================= in postComments file',err)
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

        return err
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