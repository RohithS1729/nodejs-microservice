const express=require("express")
const dotenv=require("dotenv")
dotenv.config()
const mongoose=require("mongoose")
const amqp = require("amqplib")

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

//dbms

mongoose.connect(process.env.CONNECTION_STRING);
const db= mongoose.connection;
db.on('error',()=>{console.log('did not connect to db')});
db.on('open',()=>{console.log('started listening to db')});
//++++++++++++++++++++++++++++
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

            // if(data){
            //     console.log('call route')

            // }
        //     channel.ack(data);
        // });
    } catch (ex) {
        console.error(ex);
    }
}


function middlewareAddChannel(req,res,next){
    console.log('middelware')
    req.channel=channel
    next()
}


//+++++++++++++++++++++++++++++++



app.use(middlewareAddChannel,router)


app.listen(process.env.PORT,()=>{
    console.log("gateway is listening to post 8002")
})

