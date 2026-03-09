const express = require("express");
const router = express.Router();

const controller = require("../controllers/orderController");

//ROTAS DE PEDIDOS PARA API

//ROTA PARA CRIAR PEDIDO
router.post("/order", controller.createOrder);

//ROTA PARA CONSULTAR PEDIDO
router.get("/order/:id", controller.getOrder);

//ROTA PARA LISTAR PEDIDOS
router.get("/order/list", controller.listOrders);

//ROTA PARA EDITAR PEDIDO
router.put("/order/:id", controller.updateOrder);

//ROTA PARA DELETAR PEDIDO
router.delete("/order/:id", controller.deleteOrder);

module.exports = router;