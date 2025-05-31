// hami yaha database connection ko code / LOGIC LEKXAM
// const sequelize = require("sequelize");
const { Sequelize, DataTypes} = require("sequelize");
const bookModel = require("./models/book.model")

const sequelize = new Sequelize("postgresql://postgres.vuqrzbnwwbowjwmzbqau:Smashrocker@123@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres")


sequelize.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:" + err);
  });
  // const info = {}
  const db = {}
  db.Sequelize = Sequelize
  db.sequelize = sequelize
  db.books = bookModel(sequelize, DataTypes)

  // migrate code ho yo chai hai
  sequelize.sync({force: true, alter:false}).then(()=>{
    console.log("yes migrate done")
  })
  module.exports = db
  // module.exports = sequelize