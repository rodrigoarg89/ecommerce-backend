const { OrdersServices } = require("../services");
require("dotenv").config();
//all the products that the user is selling
const getUserProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const offset = req.query.offset ?? 0;
    const limit = req.query.limit ?? 5;
    const products = await OrdersServices.getByUser(
      id,
      offset,
      limit
    );
    res.json(products);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "",
    });
  }
};

//see all the orders that have a user
const getUserOrders = async (req, res, next) => {
  try {
    const { id } = req.params;
    const offset = req.query.offset ?? 0;
    const limit = req.query.limit ?? 5;
    const orders = await OrdersServices.getByUserOrders(
      id,
      offset,
      limit
    );
    res.json(orders);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "",
    });
  }
};


//create a new product including an image
const createNewProduct = async (req, res, next) => {
  try {
    // {id, nameProduct, price, availableQty, status, createdBy, imageURL}
    const data = req.body;
    const result = await OrdersServices.createProduct(data);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "",
    });
  }
};

//Show all the products that the user has so far in his cart
const getByUserProductsInCart = async (req, res, next) => {
  try {
    const { cartId } = req.params;
    const cartData = await OrdersServices.getWithProducts(
      cartId,
      offset,
      limit
    );
    res.json(cartData);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "",
    });
  }
};


//add a product to the cart
const addProductInCart = async (req, res, next) => {
  try {
    // creator, title, participants
    //{ createdBy: 1, title: 'lasdñkjfalk', participants: [1, 3] }
    const data = req.body;
    const result = await OrdersServices.create(data);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "",
    });
  }
};


//Make a purchase, all products in the cart are marked as purchased and the cart changes to status 'purchased'




const getProducts = async (req, res, next) => {
  try {
    const { orderId } = req.params;
    const offset = Number(req.query.offset ?? 0);
    const limit = Number(req.query.limit ?? 20);
    const products = await OrdersServices.getProducts(
      orderId,
      offset,
      limit
    );
    const { count, rows } = products;
    res.json({
      count,
      next: `${process.env.HOST}/api/v1${req.path}?offset=${offset + limit}&limit=${limit}`,
      previous: `${process.env.HOST}/api/v1${req.path}?offset=${offset - limit}&limit=${limit}`,
      products: rows,
    });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "",
    });
  }
};

module.exports = {
  getUserProducts,
  getUserOrders,
  getByUserProductsInCart,
  createNewProduct,
  getProducts,
};
