const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Cart = db.define("cart", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id",
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "product_id"
  },
  totalPrice: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "total_price",
  },
});

module.exports = Cart;
