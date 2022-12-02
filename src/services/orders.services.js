const { Users, Orders, Products, Carts } = require("../models");

class OrdersServices {
  static async getByUser(id, offset, limit) {
    try {
      const products = await Users.findAll({
        where: { id },
        attributes: ["id"],
        include: {
          model: Products,
          attributes: ["id", "name", "price", "created_by"],
        },
        offset,
        limit,
        subQuery: false,
      });
      return products;
    } catch (error) {
      throw error;
    }
  }

  static async getByUserOrders (id, offset, limit) {
    try {
      const orders = await Users.findAll({
        where: { id },
        attributes: ["id"],
        include: {
          model: Orders,
          attributes: ["id", "total_price", "user_id", "status"],
        },
        offset,
        limit,
        subQuery: false,
      });
      return orders;
    } catch (error) {
      throw error;
    }
  }

  static async getWithProducts(id) {
    try {
      const cartData = await Carts.findAndCountAll({
        where: { id },
        include: [
          {
            model: Products,
            as: "products",
          },
          {
            model: Users,
          },
        ],
      });
      return cartData;
    } catch (error) {
      throw error;
    }
  }


  static async createProduct(data) {
    try {
      const result = await Products.create(data);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(data) {
    try {
      const { userId } = data;
      const cart = await Carts.create({ userId });
      // {id, userId, productId, totalPrice}
      const cartId = cart.id;

      const productsAddCart = products.map((productId) => {
        return {
          cartId,
          productId,
        };
      });
      console.log(productsAddCart);

      productsAddCart.forEach(
        async (product) => await Carts.create(product)
      );
    } catch (error) {
      throw error;
    }
  }

  

  static async getProducts(productId, offset, limit) {
    try {
      const result = await Products.findAndCountAll({
        where: { productId },
        offset,
        limit,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }





}

module.exports = OrdersServices;
