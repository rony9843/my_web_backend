const { connection } = require("mongoose");
const mongoose = require("mongoose");

const DB_connect = async (connectionString) => {
  mongoose.set("strictQuery", false);
  await mongoose.connect(connectionString);
};

module.exports = DB_connect;
