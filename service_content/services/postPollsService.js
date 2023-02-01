// const cloudinary = require('cloudinary').v2
const BlogData=require('../modals/postData')
const savingData=require('../repository/savingData')


// cloudinary.config({ 
//     cloud_name: 'dnxmtemvf', 
//     api_key: '491466975142258', 
//     api_secret: 'rRbDPkO5-1JuWEgiRW-1y4rZRUU',
//     secure: true
//   });


function postPollsService(req,res){
    
        let date= new Date().toISOString()
        let newBlog=new BlogData(req.body)
        newBlog.creation=date

        


        savingData(newBlog,res)
        // newBlog.save((err1,data1)=>{
        //     if(err1){
        //         res.send(err1)
        //     }else{
        //         res.send({
        //             msg:'posted',
        //             id:data1._id
        //         })
        //     }
        // })
    
    
    


    
}

module.exports=postPollsService

// function postPollsService(req,res){
//     if(req.files){
//         const file=req.files.media;

//     cloudinary.uploader.upload(file.tempFilePath,(err,data)=>{
        
//         let date= new Date().toISOString()
//         let newBlog=new BlogData(req.body)
//         newBlog.creation=date




//         newBlog.save((err1,data1)=>{
//             if(err1){
//                 res.send(err1)
//             }else{
//                 res.send({
//                     msg:'posted',
//                     id:data1._id
//                 })
//             }
//         })

//     })
//     }else{
//         let date= new Date().toISOString()
//         let newBlog=new BlogData(req.body)
//         newBlog.creation=date




//         newBlog.save((err1,data1)=>{
//             if(err1){
//                 res.send(err1)
//             }else{
//                 res.send({
//                     msg:'posted',
//                     id:data1._id
//                 })
//             }
//         })
//     }
    
    


    
// }