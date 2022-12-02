const { userRegister, getAllUser } = require("./users.controllers");
const { userLogin } = require("./auth.controllers");
const {
  getUserOrders,
  getProductsInOrder,
  createProductInOrder,
  createOrder,
  getProducts,
} = require("./orders.controllers");

module.exports = {
  userRegister,
  userLogin,
  getUserOrders,
  getProductsInOrder,
  createProductInOrder,
  createOrder,
  getProducts,
};
