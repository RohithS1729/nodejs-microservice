const router=require("express").Router()
const postsRoute=require("./posts.route")
const pollsRoute=require("./polls.route")



router.use('/posts',postsRoute)
router.use('/polls',pollsRoute)

module.exports=router













// const listener=(err,conn)=>{
//     //   // Listener
//         conn.createChannel((err, ch2) => {
//             if (err) throw err;
    
//             ch2.assertQueue(queue);
    
//             ch2.consume(queue, (msg) => {
//             if (msg !== null) {
//                 console.log(msg.content.toString());
//                 ch2.ack(msg);
//             } else {
//                 console.log('Consumer cancelled by server');
//             }
//             });
//         });
//     }
//     const sender=(err,conn)=>{
//         conn.createChannel((err, ch1) => {
//             if (err) throw err;
        
//             ch1.assertQueue(queue);
        
//             setInterval(() => {
//               ch1.sendToQueue(queue, Buffer.from('something to do'));
//             }, 1000);
//           });
//     }