const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const Wine = require('./models/Wine.js')
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 6996;
(async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Database Connected')
    }catch(err){
        console.log(err)
    }
})()
app.delete('/api/wines/:id',async (req,res)=>{
    try{
        await Wine.findByIdAndDelete(req.params.id)
        res.json('Wine Deleted')
    }catch(err){
        console.log(err)
    }
})
app.get('/api/wines/:id', async (req,res)=>{
    try{
        const Wine1 = await Wine.findById(req.params.id)
        res.json(Wine1)
    }catch(err){
        console.log(err)
    }
})
app.put('/api/wines/:id', async (req,res)=>{
    try{
        await Wine.findByIdAndUpdate({_id:req.params.id},{
            type:req.body.type,
            section:req.body.section,
            category:req.body.category,
            region:req.body.region,
            subregion:req.body.subregion,
            sequence:req.body.sequence,
            bin:req.body.bin,
            description:req.body.description,
            vintageSize:req.body.vintageSize,
            price:req.body.price            
        })
        res.json('Wine Updated')
    }catch(err){
        console.log(err)
    }
})
app.post('/api/wines', async (req,res)=>{
    try{
        await Wine.create({
            type:req.body.type,
            section:req.body.section,
            category:req.body.category,
            region:req.body.region,
            subregion:req.body.subregion,
            sequence:req.body.sequence,
            bin:req.body.bin,
            description:req.body.description,
            vintageSize:req.body.vintageSize,
            price:req.body.price            
        })
        res.json('Wine Added')
    }catch(err){
        console.log(err)
    }
})
app.get('/api/wines', async (req,res)=>{
    const allWines = await Wine.find()
    res.json(allWines)
})
app.get('/',(req,res)=>res.json({"Hello":"World"}))
app.listen(PORT, ()=>{
    console.log(`Express Server Listening on Port: ${PORT}`)
})