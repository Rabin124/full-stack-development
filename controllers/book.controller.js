const { books } = require("../database/connection")

exports.fetchBooks = async function(req,res){
  // users.findAll()
  // logic to fetch books from database
  const datas = await books.findAll()//SELECT * FROM books
  res.json({
    message : "books fetched successfully",
    datas
  })
}

exports.addBook= async function(req,res){
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
}

exports.deleteBook = function(req,res){
  res.json({
    message : "Book deleted successfully"
  })
}

exports.editBook = function(req,res){
  res.json({
    message : "Book updated successfully"
  })
}


exports.singleFetchBook =async function(req,res){
  // first capture what id is he sending 
  const id= req.params.id
  const datas = await books.findByPk(id) //alwewys return objects
  // const datass = await books.findAll({
  //   where:{
  //     id:id
  //   }
  // })//always returns array
  res.json({
    message:"Single Book fetched successfully",
    datas,
    // datass
  })
}
// module.exports = {fetchBooks,addBook,deleteBook,editBook}