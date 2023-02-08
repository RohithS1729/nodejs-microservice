const express=require("express")
const dotenv=require("dotenv")
dotenv.config()
const amqp = require('amqplib');


const cors=require("cors")
const proxy=require("express-http-proxy")

const app=express()
app.use(cors());





const bp = require("body-parser");
app.use(bp.json());
var channel, connection;

connect();
async function connect() {
    try {
        const amqpServer = process.env.AMPQUrl;
        connection = await amqp.connect(amqpServer);
        channel = await connection.createChannel();

        await channel.assertQueue("tasks");
    } catch (ex) {
        console.error(ex);
    }
}

const createSession = async (req,res,next) => {
    if(req.method==='POST'){
      await channel.sendToQueue("tasks", Buffer.from(JSON.stringify(req.body)));
      res.send('request sent!! task in progress')
      next()
    }else{
      next()

    }

    // await channel.close();
    // await connection.close();
};





//++++++++++++++++++++++++++++++++++++


app.use('/users',proxy('http://localhost:8001'))

app.use("/content",createSession,proxy("http://localhost:8002"))

app.use("/groups",proxy("http://localhost:8003"))



app.listen(process.env.PORT,()=>{
    console.log("gateway is listening to post 8000")
})










