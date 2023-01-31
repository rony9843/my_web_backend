const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const message = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  subject: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", message);

module.exports = Message;
