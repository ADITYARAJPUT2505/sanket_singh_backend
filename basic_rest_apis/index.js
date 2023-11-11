const express = require('express')
const bodyParser=require('body-parser')
const app =  express()
const PORT=3000
//mimic a db using an array
let bloglist=[]
app.get('/blogs',(req,res)=>{
    return res.status(200).json({
        data:bloglist,
        success:true
     })
})
app.post('/blogs',(req,res)=>{
    console.log(req.body)
})
app.listen(PORT,()=>{
    console.log("server started on port",PORT)
})