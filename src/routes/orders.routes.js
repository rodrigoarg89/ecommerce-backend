const { Router } = require("express");
const authenticate = require("../middlewares/auth.middleware");
const {
  getUserOrders,
  getProductsInOrder,
  createProductInOrder,
  getProducts,
} = require("../controllers");
const { getUserProducts } = require("../controllers/orders.controllers");

/**
 * @openapi
 * /api/v1/orders/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get all orders from user
 *     tags: [orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: user Id
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items: {}
 */

const router = Router();
// obtiene todas las orders de un usuario
// primera es agreagar un campo para el parametro de la petición
// user id
// es poder enviar el token en la petición
router.get("/orders/:id", authenticate, getUserProducts);
router.get("/orders/products/:orderId", getProducts);
router.get(
  "/orders/:orderId/products",
  authenticate,
  getProductsInOrder
);
router.post(
  "/orders/:orderId/product",
  authenticate,
  createProductInOrder
);

router.post("/orders", authenticate);

// crear una order
// titulo
// created by
// participantes

module.exports = router;

// ?
// es un par clave-valor (key/value)
// ?username=jose&phone=1111111111&country=usa
// https://pokeapi.co/api/v2/pokemon?offset=60&limit=20

// como changaos obtenemos los query params en node??
