// hami yaha database connection ko code / LOGIC LEKXAM
// const sequelize = require("sequelize");
const { Sequelize, DataTypes} = require("sequelize");

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

  module.exports = db
  // module.exports = sequelize