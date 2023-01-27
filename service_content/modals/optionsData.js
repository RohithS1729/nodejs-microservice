const mongoose = require("mongoose");
const Schema= mongoose.Schema

const OptionsData=new Schema({
    // Content (  id, creation,modified, title, type, body, imageUrls, videoUrl, userId,groupId )
    creation:String,
    voterId:String,
    postId:String,
    option:String

})


module.exports=mongoose.model('data-options',OptionsData)