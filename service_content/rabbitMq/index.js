
const amqplib = require('amqplib/callback_api');


const amqplibQueueFn=(req,serviceCallbackFn)=>{
  const queue = 'tasks';

amqplib.connect(process.env.AMPQUrl, (err, conn) => {
  if (err) throw err;
    //sending to quere
    conn.createChannel((err, ch1) => {
        if (err) throw err;
    
        ch1.assertQueue(queue);
        ch1.sendToQueue(queue, Buffer.from(JSON.stringify(req.body)))
      res.send('done')
      //   setInterval(() => {
      //     ch1.sendToQueue(queue, Buffer.from(JSON.stringify(req.body)));
      //   }, 1000);
      });

      //listening

      conn.createChannel((err, ch2) => {
          if (err) throw err;
  
          ch2.assertQueue(queue);
  
          ch2.consume(queue, (msg) => {
          if (msg !== null) {
              console.log(msg.content.toString());
              serviceCallbackFn(msg)


              ch2.ack(msg);
          } else {
              console.log('Consumer cancelled by server');
          }
          });
      });

      
});
}
module.exports=amqplibQueueFn