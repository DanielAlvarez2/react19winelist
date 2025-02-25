const mongoose = require('mongoose')

const WineSchema = new mongoose.Schema({
    type:{type:String},
    section:{type:String},
    category:{type:String},
    region:{type:String},
    subregion:{type:String},
    sequence:{type:Number},    
    bin:{type:Number},
    description:{type:String},
    vintageSize:{type:String},
    price:{type:Number}
},{
    timestamps:true
})

module.exports = mongoose.model('Wine', WineSchema)