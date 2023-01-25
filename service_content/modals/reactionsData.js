const mongoose = require("mongoose");
const Schema= mongoose.Schema

const reactionData=new Schema({
    creation:String,
    modified:String,
    title:String,
    type:String,
    likedBy:String,
    postId:String,
    // groupId:String,
    counter:Number,
    selectionOption:String
})


module.exports=mongoose.model('data-reactions',reactionData)