const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/jitterbit", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB conectado!"))
    .catch(err => console.log(err));

app.use("/", orderRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000.");
});