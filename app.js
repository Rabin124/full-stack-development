const express = require("express");
const app = express();
require("./database/connection")

// let app = require("express")()

// app.get("/",(req,res)=>{
//   res.json({
//     "name":"rabin",
//     "address":"bnp"
//   })
// })
// app.get("/about",(req,res)=>{
//   res.send("About world")
// })
// app.post("/aboutpost",(req,res)=>{
//   res.send("About world")
// })

app.get("/books",function(req,res){
  users.findAll()
  res.json({
    // logic to fetch books from database
    message : "books fetched successfully"
  })
})

app.post("/books",function(req,res){
  res.json({
    message: "Book added successfully"
  })
})

app.delete("/books/:id",function(req,res){
    res.json({
      message : "Book deleted successfully"
    })
})
app.patch("/books/:id",function(req,res){
    res.json({
      message : "Book updated successfully"
    })
})






app.listen(3000, function () {
  console.log("server/backend/node project has started at port 3000");
});
