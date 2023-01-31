/**
 * ? email message system
 * TODO:
 * ^ input name, email ,phone number (optional) , subject , message
 * ^ check name , email , subject and user message -> if blank any one -> return 401 status code
 * ^ if full fill -> return status code 200
 * ^ then create a doc in database
 */

const DB_connect = require("./db/db");
const config = require("./config/config");
require("dotenv").config();
const app = require("./app/app");

// create root route
app.get("/", (req, res, next) => {
  res.send({
    message: "this is home route",
  });
});

// db connection
DB_connect(config.Db_Con)
  .then(() => {
    // * listen app
    app.listen(config.PORT, () => {
      console.log(`db connected and port is running at ${config.PORT}`);
    });
  })
  .catch((e) => next(e));
