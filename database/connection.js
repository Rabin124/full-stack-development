// hami yaha database connection ko code / LOGIC LEKXAM
// const sequelize = require("sequelize");
const { Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize(process.env.CS)


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

  module.exports = db
  // module.exports = sequelize