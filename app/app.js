const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const sendMessage = require("../router/sendMessageRoute");
const router = require("./router");
const globalError = require("../error/error");

const app = express();
// use middleware
app.use(cors());
app.use(express.json());
app.use(morgan("combined"));

// error handel
app.use(globalError);

app.use(router);
app.use(sendMessage);

module.exports = app;
