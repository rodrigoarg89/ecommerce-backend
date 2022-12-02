const { userRegister, getAllUser } = require("./users.controllers");
const { userLogin } = require("./auth.controllers");
const {
  getUserProducts,
  getUserOrders,
  getProducts,
  createNewProduct,
} = require("./orders.controllers");

module.exports = {
  userRegister,
  userLogin,
  getUserProducts,
  getUserOrders,
  createNewProduct,
  getProducts,
};
