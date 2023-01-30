const mongoose = require("mongoose");
const Schema= mongoose.Schema

const OptionsData=new Schema({
    creation:String,
    voterId:String,
    postId:String,
    option:String

})


module.exports=mongoose.model('data-options',OptionsData)