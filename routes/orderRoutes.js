const express = require("express");
const router = express.Router();

const controller = require("../controllers/orderController");
const authMiddleware = require("../middleware/authMiddleware");

//ROTAS DE PEDIDOS PARA API

//ROTA PARA CRIAR PEDIDO
/**
 * @swagger
 * /order:
 *   post:
 *     summary: Criar um novo pedido
 *     tags: [Pedidos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numeroPedido:
 *                 type: string
 *               valorTotal:
 *                 type: number
 *               dataCriacao:
 *                 type: string
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     idItem:
 *                       type: string
 *                     quantidadeItem:
 *                       type: number
 *                     valorItem:
 *                       type: number
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 */
router.post("/order", authMiddleware, controller.createOrder);

//ROTA PARA CONSULTAR PEDIDO
/**
 * @swagger
 * /order/{id}:
 *   get:
 *     summary: Buscar pedido por ID
 *     tags: [Pedidos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pedido encontrado
 *       404:
 *         description: Pedido não encontrado
 */
router.get("/order/:id", authMiddleware, controller.getOrder);

//ROTA PARA LISTAR PEDIDOS
/**
 * @swagger
 * /order/list:
 *   get:
 *     summary: Listar todos os pedidos
 *     tags: [Pedidos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de pedidos
 */
router.get("/order/list", authMiddleware, controller.listOrders);

//ROTA PARA EDITAR PEDIDO
/**
 * @swagger
 * /order/{id}:
 *   put:
 *     summary: Atualizar pedido
 *     tags: [Pedidos]
 *     security:
 *       - bearerAuth: []
 */
router.put("/order/:id", authMiddleware, controller.updateOrder);

//ROTA PARA DELETAR PEDIDO
/**
 * @swagger
 * /order/{id}:
 *   delete:
 *     summary: Deletar pedido
 *     tags: [Pedidos]
 *     security:
 *       - bearerAuth: []
 */
router.delete("/order/:id", authMiddleware, controller.deleteOrder);

module.exports = router;