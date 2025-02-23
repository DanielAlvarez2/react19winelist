const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
const PORT = process.env.PORT || 6996
app.get('/',(req,res)=>res.json({"Hello":"World"}))
app.listen(PORT, ()=>{
    console.log(`Express Server Listening on Port: ${PORT}`)
})