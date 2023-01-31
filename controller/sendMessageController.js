const Message = require("../model/messageModel");

const sendMessageController = async (req, res, next) => {
  // get user data
  const { name, email, phone, subject, message } = req.body;

  console.log(name, email, subject, phone, message);

  // check user data
  if (!name || !email || !subject || !message) {
    return res.status(401).json({
      message: "blank input box",
    });
  }

  try {
    const createMessage = await new Message({
      name,
      email,
      phone,
      subject,
      message,
    });

    createMessage.save();

    return res.status(200).json({
      message: "message sended",
    });
  } catch (e) {
    next(e);
  }
};

module.exports = sendMessageController;
