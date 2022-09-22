const express =require("express");
const path =require("path");
const app = express();


app.use(express.static(path.resolve(__dirname,"frontEnd")))


app.get("/*",(req,res)=>
{
    res.sendFile(path.resolve(__dirname,"frontEnd",'index.html'))
})


app.listen(process.env.PORT || 7000,()=>console.log("sever is running"));
