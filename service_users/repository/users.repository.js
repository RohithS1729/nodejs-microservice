const UserData = require("../modals/userData")
const savingData=require('../repository/savingData')

const signUpRepo=(req,res)=>{
    UserData.findOne({username:req.body.username}).exec((err,data)=>{
        if(err){
            res.send(err)
        }else if(data){
            res.send({
                msg:'user already exists'
            })
        }else{
            const newUser= new UserData(req.body);
            newUser.password=newUser.generateHash(req.body.password);

            savingData(newUser,res)

            
        }
    })
}

const loginRepo=async(req,res)=>{
    try{
        let response=await UserData.findOne({username:req.body.username})
        // return response
        // console.log(response)
        if(!response){
            return {
                msg:'No such user found, please sign up!!'
            }
        }else if(response.comparePassword(req.body.password)){
            return {
                msg:'logged in',
                userId:response._id
            }
        }else{
            return {
                    msg:'wrong password or username'
                    
                    
                }
        }



    }
    catch(err){
        return err
    }

    // UserData.findOne({username:req.body.username}).exec((err,data)=>{
    //     if(err){
    //         res.send(err)
    //     }else if(!data){
    //         res.send({
    //             msg:'No such user found, please sign up!!'
    //         })
    //     }else if(data.comparePassword(req.body.password)){
 
    //             res.send({
    //                 msg:'logged in',
    //                 userId:data._id
    //             })
    //         }else{
    //             res.send({
    //                 msg:'wrong password or username'
                    
                    
    //             })
    //         }
        
    // })

}
const getUserProfileRepo=(req,res)=>{
    UserData.find({_id:req.query.id},{username:1}).exec((err,data)=>{
        if(err) res.send(err)
        else{
            res.send(data)
        }
    })
}
const getUsersRepo=(req,res)=>{
    UserData.find({},{username:1}).exec((err,data)=>{
        if(err) res.send(err)
        else{
            res.send(data)
        }
    })
}

module.exports={signUpRepo,loginRepo,getUsersRepo,getUserProfileRepo}
