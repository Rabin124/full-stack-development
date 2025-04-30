const express = require("express");
const { books } = require("./database/connection");
const app = express();
require("./database/connection")
app.use(express.json()) // for parsing application/json



app.get("/books",async function(req,res){
  // users.findAll()
  // logic to fetch books from database
  const datas = await books.findAll()//SELECT * FROM books
  res.json({
    message : "books fetched successfully",
    datas
  })
})

app.post("/books",async function(req,res){
  console.log(req.body)
  // const bookName = req.body.bookName
  // const bookPrice = req.body.bookPrice
  const { bookName, bookPrice,bookAuthor, bookGenre } = req.body
  await books.create({
    bookName: bookName,
    bookPrice: bookPrice,
    bookAuthor: bookAuthor,
    bookGenre: bookGenre
  })
  console.log(bookName)
  console.log(bookPrice)
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
