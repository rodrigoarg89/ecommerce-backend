const { UserServices } = require("../services");
const welcomeTemplate = require("../templates/welcome");
const transporter = require("../utils/mailer");

const userRegister = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UserServices.create(newUser);
    res.status(201).json(result);
    transporter.sendMail({
      from: "<rodrigoarganaraz89@gmail.com>",
      to: result.email,
      subject: "Welcome to my ecommerce",
      text: `Hi ${result.username} Welcome to the best ecommerce in the world`,
      html: welcomeTemplate(result.username),
    });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "missing data",
    });
  }
};

const getAllUser = async (req, res, next) => {
  try {
    const offset = req.query.offset ?? 0;
    const limit = req.query.limit ?? 5;
    const users = await UserServices.getAll(offset, limit);
    res.json(users);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "something is wrong",
    });
  }
};

module.exports = {
  userRegister,
  getAllUser,
};
