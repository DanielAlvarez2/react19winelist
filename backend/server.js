const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
const PORT = process.env.PORT || 6996;
(async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Database Connected')
    }catch(err){
        console.log(err)
    }
})() 
app.post('/api/wines',(req,res)=>{
    
})
app.get('/',(req,res)=>res.json({"Hello":"World"}))
app.listen(PORT, ()=>{
    console.log(`Express Server Listening on Port: ${PORT}`)
})