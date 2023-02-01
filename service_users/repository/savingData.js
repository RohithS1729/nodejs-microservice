const savingData=(data,res)=>{
    data.save((err1,data1)=>{
        if(err1) return res.send(err1)
        else return res.send(data1)
    })
}
module.exports=savingData