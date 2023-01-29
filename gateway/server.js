const express=require("express")
const cors=require("cors")
const proxy=require("express-http-proxy")

const app=express()
app.use(cors());

app.use('/users',proxy('http://localhost:8001'))
app.use("/content",proxy("http://localhost:8002"))
app.use("/groups",proxy("http://localhost:8003"))
app.use("/reactions",proxy("http://localhost:8004"))



app.listen(8000,()=>{
    console.log("gateway is listening to post 8000")
})
