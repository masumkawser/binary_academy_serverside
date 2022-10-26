 
 const express =require('express')
 const app =express();
 const port=process.env.PORT ||5000;
 const catagories =require('./data/data.json');
 app.get('/',(req,res) =>{
    res.send('bINARTY CATAGORY RUNNING');
 })
 app.get('/course-catagories',(req,res) =>{
    res.send(catagories);
 })
 app.listen(port,()=>{
    console.log('binary academy port running',port);
 })