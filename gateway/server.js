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











// const queue = 'tasks';

// amqplib.connect(process.env.AMPQUrl, (err, conn) => {
//     if (err) throw err;
//         //sending to quere
//       conn.createChannel((err, ch1) => {
//           if (err) throw err;
      
//           ch1.assertQueue(queue);
//           ch1.sendToQueue(queue, Buffer.from(JSON.stringify(req.body)))
//         res.send('done')
//         //   setInterval(() => {
//         //     ch1.sendToQueue(queue, Buffer.from(JSON.stringify(req.body)));
//         //   }, 1000);
//         });

//         //listening

//         // conn.createChannel((err, ch2) => {
//         //     if (err) throw err;
    
//         //     ch2.assertQueue(queue);
    
//         //     ch2.consume(queue, (msg) => {
//         //     if (msg !== null) {
//         //         console.log(msg.content.toString());
//         //         postReactions(msg)


//         //         ch2.ack(msg);
//         //     } else {
//         //         console.log('Consumer cancelled by server');
//         //     }
//         //     });
//         // });
  
        
//   });