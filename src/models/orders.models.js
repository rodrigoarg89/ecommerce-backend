const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Orders = db.define("orders", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  totalPrice: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "total_price",
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id",
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    validate: {
        isComplete: false,
      }
  },
});

module.exports = Orders;
