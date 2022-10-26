 
 const express =require('express')
 const app =express();
 const port=process.env.PORT ||5000;
 app.get('/',(req,res) =>{
    res.send('bINARTY CATAGORY RUNNING');
 })

 app.listen(port,()=>{
    console.log('binary academy port running',port);
 })