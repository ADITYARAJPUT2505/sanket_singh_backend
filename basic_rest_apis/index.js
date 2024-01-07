const express = require('express')
const bodyParser=require('body-parser')
const app =  express()
app.use(logger)
const PORT=3000
//mimic a db using an array
let bloglist=[]
app.get('/blogs',(req,res)=>{
    return res.status(200).json({
        data:bloglist,
        success:true
     })
})
//middleware
function logger(req,res,next){
    console.log(req.url)
    console.log(req.body)
    next()
} 

function isAuthenticated(req,res,next){
    console.log("yes user is  authenticated")
    next()
}
//
app.post('/blogs',(req,res)=>{
    console.log(req.body)
})
app.listen(PORT,()=>{
    console.log("server started on port",PORT)
})