const { userRegister } = require("./users.controllers");
const { userLogin } = require("./auth.controllers");
const {
  getUserProducts,
  getUserOrders,
  createNewProduct,
  getByUserProductsInCart,
  addProductInCart,
  getProductsOrder
} = require("./orders.controllers");

module.exports = {
  userRegister,
  userLogin,
  getUserProducts,
  getUserOrders,
  createNewProduct,
  getByUserProductsInCart,
  addProductInCart,
  getProductsOrder
};
