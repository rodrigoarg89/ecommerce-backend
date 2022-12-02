const { Users, Orders, Products, Carts, Messages } = require("./index");

const initModels = () => {

  Products.belongsTo(Users, { as: "choice_product", primaryKey: "id" });
  Users.belongsToMany(Products, { through: "product" });


  Users.hasOne(Carts, { as: "buyer", foreignKey: "user_id" });
  Carts.belongsTo(Users, { as: "cart_full", primaryKey: "id" });

  Orders.belongsTo(Users, { as: "cart_full", primaryKey: "id" });
  Users.hasMany(Orders, { as: "", foreignKey: "user_id" });


};

module.exports = initModels;
