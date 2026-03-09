const express = require("express");
const router = express.Router();

const controller = require("../controllers/orderController");

//ROTAS DE PEDIDOS PARA API

//ROTA PARA CRIAR PEDIDO
/**
 * @swagger
 * /order:
 *   post:
 *     summary: Criar um novo pedido
 *     tags: [Pedidos]
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
router.post("/order", controller.createOrder);

//ROTA PARA CONSULTAR PEDIDO
/**
 * @swagger
 * /order/{id}:
 *   get:
 *     summary: Buscar pedido por ID
 *     tags: [Pedidos]
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
router.get("/order/:id", controller.getOrder);

//ROTA PARA LISTAR PEDIDOS
/**
 * @swagger
 * /order/list:
 *   get:
 *     summary: Listar todos os pedidos
 *     tags: [Pedidos]
 *     responses:
 *       200:
 *         description: Lista de pedidos
 */
router.get("/order/list", controller.listOrders);

//ROTA PARA EDITAR PEDIDO
/**
 * @swagger
 * /order/{id}:
 *   put:
 *     summary: Atualizar pedido
 *     tags: [Pedidos]
 */
router.put("/order/:id", controller.updateOrder);

//ROTA PARA DELETAR PEDIDO
/**
 * @swagger
 * /order/{id}:
 *   delete:
 *     summary: Deletar pedido
 *     tags: [Pedidos]
 */
router.delete("/order/:id", controller.deleteOrder);

module.exports = router;