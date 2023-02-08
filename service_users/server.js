const express=require("express")
const dotenv=require("dotenv")
dotenv.config()
const mongoose=require("mongoose")

const cors=require("cors")

const app=express()
app.use(cors())

//image upload
// const fileUpload=require("express-fileupload")
// app.use(fileUpload({
//     useTempFiles:true
// }))

//body parser
const bodyParser=require("body-parser")
app.use(bodyParser.json())
//local modules
const router=require('./api-router/index')

//dbms
mongoose.connect(process.env.CONNECTION_STRING);
const db= mongoose.connection;
db.on('error',()=>{console.log('did not connect to db')});
db.on('open',()=>{console.log('started listening to db')});

//++++++++++++++++++++++++++++++++++++
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Library API",
      version: '1.0.0',
    },
  },
  apis: ["server.js","./api-router/index.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));





//+++++++++++++++++++++++++++++++++++++


app.use(router)


app.listen(process.env.PORT,()=>{
    console.log("gateway is listening to post 8001")
})

