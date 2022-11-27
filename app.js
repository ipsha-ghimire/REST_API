//creating a restful api with node express and mongodb 
const express = require("express");
const {objectID,ObjectId}= require("mongodb");


const {dbconnection,getDb}= require("./db")

const app = express();

app.use(express.json());
let db;

dbconnection((err)=>{
  if(!err){
    app.listen(3000,(req,res)=>{
      console.log("app listening on port 3000")
  })
  db= getDb();
  }
})


//get all books
app.get("/books",(req,res)=>{
  let books=[];
  db.collection("books").find().forEach(book =>books.push(book)
  ).then(()=>{res.status(200).json(books)}).catch(()=>{res.status(501).json({err:"could not get books"})});  
});

//get individual books
app.get("/books/:id",(req,res)=>{
  if(ObjectId.isValid(req.params.id)){
    db.collection("books").findOne({_id:ObjectId(req.params.id)}).then((result)=>{
      res.status(200).json(result);
    }).catch((err)=>{
      res.status(500).json(err);
    })
  }
  else{
    res.status(500).json({err:"invalid document id"})
  }
})

//post books 

app.post("/books",(req,res)=>{
const body=req.body;
db.collection("books").insertOne(body).then((result)=>{res.status(201).json({result})}).catch((err)=>{
  res.status(500).json({err:"could not insert document"});
})
})

//delete books 








