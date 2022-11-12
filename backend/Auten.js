const { query } = require("express")
var mongoose = require("mongoose")
var MyPost = mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    autor:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
},{
    timestamps:true
})

module.exports = mongoose.model("Book",MyPost)