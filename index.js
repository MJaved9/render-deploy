const express=require("express");
require("dotenv").config()
const app=express()
app.use(express.json())
const PORT=process.env.PORT||8080;
app.get("/",(req,res)=>{
    res.send("Homepage")
})
app.get("/about",(req,res)=>{
    res.send("ABout")
})

app.listen(PORT,()=>{
    console.log(`Listning on ${PORT}`)
})
