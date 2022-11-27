//creating a restful api with node express and mongodb 
const express = require("express");
const mongodb= require("mongodb");
const db = require("./db");
const {dbconnection,getDb}= require("./db")

const app = express();



app.listen(3000,(req,res)=>{
    console.log("app listening on port 3000")
})

//get request
app.get("/books",(req,res)=>{
    let books=[]
  db.collection("books").find().forEach(book => {books.push(book)
  });  
})






