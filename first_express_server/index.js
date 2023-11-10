const express = require('express')
//create an express app object by calling the express function
const app =express()
const PORT =3000
app.get('/',function(req,res)
{
    res.send('hello world')
})
app.post('/home',function(req,res){
    res.send("this is a post request")
})
app.patch('/home',function(req,res){
    res.send("this is a patch request")
})
app.listen(PORT,function process(){
    console.log("server started")
})