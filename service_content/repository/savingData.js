const savingData=(data,res)=>{
    data.save((err1,data1)=>{
        if(err1){
            res.send(err1)
        }else{
            res.send({
                msg:'posted',
                id:data1._id
            })
        }
    })
}
module.exports=savingData