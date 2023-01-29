const express=require("express")
const mongoose=require("mongoose")

const cors=require("cors")

const app=express(

)
app.use(cors())

// //body parser
const bodyParser=require("body-parser")
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:true,parameterLimit:100000}))

// //image upload
const fileUpload=require("express-fileupload")
app.use(fileUpload({
    useTempFiles:true
}))


//local modules
const router=require('./api-router/index')

//dbms

const connectionString='mongodb+srv://firstCluster:firstCluster@cluster0.xa1yhbm.mongodb.net/SocialMedia?retryWrites=true&w=majority'
mongoose.connect(connectionString);
const db= mongoose.connection;
db.on('error',()=>{console.log('did not connect to db')});
db.on('open',()=>{console.log('started listening to db')});


// app.post("/posts",(req,res)=>{
//     console.log(req.files)
// res.send('here')
// })
app.use(router)


app.listen(8002,()=>{
    console.log("gateway is listening to post 8002")
})
