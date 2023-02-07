const express=require("express")
const dotenv=require("dotenv")
dotenv.config()
const mongoose=require("mongoose")
const amqp = require("amqplib")
// const queue = 'tasks';

const cors=require("cors")

const app=express()
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

//++++++++++++++++++++++++++++
// const amqp = require("amqplib");
var channel, connection;

connect();
async function connect() {
    try {
        const amqpServer = process.env.AMPQUrl;
        connection = await amqp.connect(amqpServer);
        channel = await connection.createChannel();
        await channel.assertQueue("tasks");
        // channel.consume("tasks", data => {
        //     console.log(`Received data at 8000: ${Buffer.from(data.content)}`);
        //     channel.ack(data);
        // });
    } catch (ex) {
        console.error(ex);
    }
}

async function consumeData(req,res,next){
    try{
        channel.consume("tasks", data => {
            console.log(`Received data at 8000: ${Buffer.from(data.content)}`);
            
            channel.ack(data);
            // next()
            // return data.content

        });
    }catch(err){
        console.log(err)
    }
}
function testMiddleware(req,res,next){
    // console.log('in middleware')
    req.test='test'
    next()
}


//+++++++++++++++++++++++++++++++


//local modules
const router=require('./api-router/index')

    




//dbms

mongoose.connect(process.env.CONNECTION_STRING);
const db= mongoose.connection;
db.on('error',()=>{console.log('did not connect to db')});
db.on('open',()=>{console.log('started listening to db')});



app.use(testMiddleware,router)
// app.get('/posts/like',consumeData,()=>{
//     res.send('service_content')
// })

app.listen(process.env.PORT,()=>{
    console.log("gateway is listening to post 8002")
})
