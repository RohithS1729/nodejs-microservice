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
//local modules
const router=require('./api-router/index');
const redirectToRoute=require('./redirectToRoute.js')

//dbms

mongoose.connect(process.env.CONNECTION_STRING);
const db= mongoose.connection;
db.on('error',()=>{console.log('did not connect to db')});
db.on('open',()=>{console.log('started listening to db')});
//++++++++++++++++++++++++++++
// const amqp = require("amqplib");
var channel, connection;
let request;
connect();
async function connect() {
    console.log('connect section')
    try {
        const amqpServer = process.env.AMPQUrl;
        connection = await amqp.connect(amqpServer);
        channel = await connection.createChannel();
        await channel.assertQueue("tasks");



        channel.consume("tasks", data => {
            console.log(`Received data at 8000: ${Buffer.from(data.content)}`);

            if(data){
                console.log('call route')
                // redirectToRoute(JSON.parse(data.content))

            }
            channel.ack(data);
        });
    } catch (ex) {
        console.error(ex);
    }
}


function testMiddleware(req,res,next){
    console.log('in middleware')
    // console.log('in middleware')
    req.data=data
    next()
}


//+++++++++++++++++++++++++++++++






app.use(router)


app.listen(process.env.PORT,()=>{
    console.log("gateway is listening to post 8002")
})


// async function consumeData(channel){
//     try{
//         channel.consume("tasks", data => {
//             console.log(`Received data at 8000: ${Buffer.from(data.content)}`);
//             postReactions(data)
//             channel.ack(data);
//             // next()
//             // return data.content

//         });
//     }catch(err){
//         console.log(err)
//     }
// }
// consumeData(req.channel)