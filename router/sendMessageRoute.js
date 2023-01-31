const router = require("../app/router");
const sendMessageController = require("../controller/sendMessageController");

const sendMessage = router.post("/message", sendMessageController);

module.exports = sendMessage;
