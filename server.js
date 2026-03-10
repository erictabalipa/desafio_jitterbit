const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");
const { swaggerUi, specs } = require("./swagger");

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/jitterbit")
    .then(() => console.log("MongoDB conectado"))
    .catch(err => console.log(err));

app.use("/", authRoutes);
app.use("/", orderRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000.");
});