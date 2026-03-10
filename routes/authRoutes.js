const express = require("express");
const router = express.Router();

const controller = require("../controllers/authController");

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Realizar login e obter token JWT
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token JWT gerado com sucesso
 */
router.post("/login", controller.login);

module.exports = router;