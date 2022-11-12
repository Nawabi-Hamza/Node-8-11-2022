var express = require("express")
var json = require("mongoose")
var cors = require("cors")
var mongoose = require("mongoose")
var MyPost = require('./Auten')
const { response } = require("express")
var App = express()
var url = "mongodb+srv://Hamza:nawabi123@cluster0.7p2xkyv.mongodb.net/BookStore"
App.use(express.json())
App.use(cors())
mongoose.connect(url)
Port = 2000

App.get('/',(req,res)=>{
    res.send("Welcome To Book Store")
})
App.post('/post',async(req,res)=>{
    const { id,name,autor,price,number } = req.body
  
    try{
        const Show = await MyPost.create({ id,name,autor,price,number })
        res.status(200).json(Show)
    }catch(error){
        res.status(400).json({error:error.message})
    }
})
App.get('/find',async(req,res)=>{
    const { name,autor,price,number } = req.body
    var Show = await MyPost.find()
    res.status(200).json(Show)
})
App.get('/findlast',async(req,res)=>{
    const { name,autor,price,number } = req.body
    var Show = await MyPost.find().sort({id:-1}).limit(1)
    res.status(200).json(Show)
})
App.patch('/update/:id',async(req,res)=>{
    var UserId = req.params.id
    let Show = await MyPost.findByIdAndUpdate({_id:UserId},{...req.body})
    res.status(200).json("File Updated...")
})
App.delete('/delete/:id',async(req,res)=>{
    const Id = req.params.id
    var Show = await MyPost.findByIdAndDelete({_id:Id},{...req.body})
    res.status(200).json("Your File Deleted Successfuly...")
})


App.listen(Port,(req,res)=>{
    console.log("Port "+Port+" Is Ready To Use ...")
})