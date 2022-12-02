const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Products = db.define(
  "products",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nameProduct: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "name"
    }, 
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    availableQty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "available_qty",
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "created_by",
    },
    // imageURL: {
    //   TYPE: DataTypes.STRING,
    //   allowNull: false,
    //   field: "image_url"
    // }
  },
  {
    timestamps: true,
    updatedAt: true,
  }
);

module.exports = Products;
