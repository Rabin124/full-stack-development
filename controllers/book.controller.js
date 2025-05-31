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
    bookGenre: bookGenre,
  })
  console.log(bookName)
  console.log(bookPrice)
  res.json({
    message: "Book added successfully"
  })
}

exports.deleteBook = async function(req,res){
  // first ma hami, kun book delete garna aatekoho tesko id lie
  const id = req.params.id 
  // id payisakepaxi, hami tesko id ko book lai delete garna parcha
 await books.destroy({
    where :{
      id
    }
  })//delete from books where id = id
  res.json({
    message : "Book deleted successfully"
  })
}

exports.editBook =async function(req,res){
  try {
    //kun id ko chai edit garne tyo id chai hami le pathaune parcha
  const id = req.params.id
  // kk update grne ta
  const { bookName, bookPrice,bookAuthor, bookGenre } = req.body

 await books.update({
    bookName,
    bookPrice,
    bookAuthor,
    bookGenre,
  },{
    where:{
      id:id
    }
  })//update books set bookName = bookName, bookPrice = bookPrice where id = id
  res.json({
    message : "Book updated successfully"
  })
}

   catch(error) {
    res.json({
      message : "Error in updating book", })    
  }
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
// module.exports = {fetchBooks,addBook,deleteBook,editBook,singleFetchBook}