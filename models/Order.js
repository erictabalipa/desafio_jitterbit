const mongoose = require("mongoose");

//MODEL DO ITEM DO PEDIDO
const ItemSchema = new mongoose.Schema({
    productId: Number,
    quantity: Number,
    price: Number
});

//MODEL DO PEDIDO COM SEUS ITENS
const OrderSchema = new mongoose.Schema({
    orderId: String,
    value: Number,
    creationDate: Date,
    items: [ItemSchema]
});

module.exports = mongoose.model("Order", OrderSchema);