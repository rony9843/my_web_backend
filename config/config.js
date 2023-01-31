require("dotenv").config();

const config = {
  PORT: process.env.PORT || 4000,

  Db_Con: process.env.DB_CONN,
};

module.exports = config;
