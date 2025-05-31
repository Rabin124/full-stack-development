
// books, bookName, bookPrice, bookAuthor, bookGenre

const bookModel = (sequelize,DataTypes)=>{
    const Book =  sequelize.define("book",{
        bookName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        bookPrice:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bookAuthor:{
            type: DataTypes.STRING,
            // allowNull: false
            defaultValue: "Rabin Adhikari"
        },
        bookGenre:{
            type: DataTypes.STRING,
            allowNull: false
        } ,
        // bookImage:{
        //     type: DataTypes.STRING,
        //     allowNull: true
        // }        
      })
      return Book
}

module.exports = bookModel