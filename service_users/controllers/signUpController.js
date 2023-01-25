const UserData = require("../modals/userData")
const express = require("express")

const signUpController=(req,res)=>{

    UserData.findOne({username:req.body.username}).exec((err,data)=>{
        console.log("signUpController")
        if(err){
            res.send(err)
        }else if(data){
            res.send({
                msg:'user already exists'
            })
        }else{
            const newUser= new UserData(req.body);
            newUser.password=newUser.generateHash(req.body.password);

            newUser.save((err,data)=>{
                if(err) return res.send(err)
                else return res.send(newUser)
            })
        }
    })


}
module.exports=signUpController