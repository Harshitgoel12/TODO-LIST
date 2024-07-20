const express=require("express");
const router = require("./routers/user.router");
const connectdb = require("./connection/conn");
const bodyParser = require("body-parser");
const app=express();
app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',router);


connectdb().then((res)=>{
    console.log("connect to mongodb database successfully")
    app.listen(4000,()=>{
        console.log("server is listen on port 4000 ")
    })
})
.catch((err)=>{
    console.log("something went wrong")
})























