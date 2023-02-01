const mongoose = require("mongoose");
const Schema= mongoose.Schema
let ObjectId = Schema.ObjectId

const postsData=new Schema({
    creation:String,
    modified:String,
    title:String,
    type:String,
    
    groupType:String,
    body:String,
    imageUrl:String,
    videoUrl:String,
    // userId:ObjectId,
    groupId:String,
    selected:String,
    options:Object,
    userId: {
        type: mongoose.Schema.Types.ObjectId, // here you set the author ID
                                              // from the Author colection, 
                                              // so you can reference it
        required: true
      }
})


module.exports=mongoose.model('data-contents',postsData)