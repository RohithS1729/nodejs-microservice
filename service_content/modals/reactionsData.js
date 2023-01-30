const mongoose = require("mongoose");
const Schema= mongoose.Schema

const reactionData=new Schema({
    creation:String,
    // modified:String,
    title:String,
    type:String,
    likedBy:String,
    postId:String,
    comment:String,
    groupId:String,

})


module.exports=mongoose.model('data-reactions',reactionData)