const mongoose = require("mongoose");
const Schema= mongoose.Schema


const Members=new Schema({
    creation:String,
    
    // groupId:String,
    // userId:String
    userId: {
                type: mongoose.Schema.Types.ObjectId, 
                required: true
            },
    groupId: {
                type: mongoose.Schema.Types.ObjectId, 
                required: true
            }
})


module.exports=mongoose.model('data-members',Members)