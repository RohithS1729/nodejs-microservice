const mongoose = require("mongoose");
const Schema= mongoose.Schema

const postsData=new Schema({
    creation:String,
    modified:String,
    title:String,
    type:String,
    
    groupType:String,
    body:String,
    imageUrl:String,
    videoUrl:String,
    userId:String,
    groupId:String,
    selected:String,
})


module.exports=mongoose.model('data-contents',postsData)