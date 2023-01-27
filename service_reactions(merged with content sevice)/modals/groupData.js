const mongoose = require("mongoose");

const Schema= mongoose.Schema

const GroupData=new Schema({
    GroupName:String,

    GroupPrivacy:String
})


module.exports=mongoose.model('data-groups',GroupData)
