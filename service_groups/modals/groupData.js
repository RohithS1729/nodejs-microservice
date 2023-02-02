const mongoose = require("mongoose");

const Schema= mongoose.Schema

const GroupData=new Schema({
    GroupName:String,
    creation:String,
    GroupPrivacy:String,
    // userId:String,

    imageUrl:String,
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
      }
})


module.exports=mongoose.model('data-groups',GroupData)
