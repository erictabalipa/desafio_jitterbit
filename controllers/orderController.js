const Order = require("../models/Order");

//MAPPING DO JSON PARA SALVAR DADOS NO BANCO CORRETAMENTE 
function mapOrder(data) {
    return {
        orderId: data.numeroPedido,
        value: data.valorTotal,
        creationDate: new Date(data.dataCriacao),
        items: data.items.map(item => ({
            productId: Number(item.idItem),
            quantity: item.quantidadeItem,
            price: item.valorItem
        }))
    };
}

//CRIAR PEDIDO
exports.createOrder = async (req, res) => {
    try {

        const mapped = mapOrder(req.body);

        const order = new Order(mapped);

        await order.save();

        res.status(201).json(order);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//CONSULTAR PEDIDO
exports.getOrder = async (req, res) => {
    try {

        const order = await Order.findOne({
            orderId: req.params.id
        });

        if (!order) {
            return res.status(404).json({ message: "Pedido não encontrado" });
        }

        res.json(order);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//LISTAR PEDIDOS
exports.listOrders = async (req, res) => {
    try {

        const orders = await Order.find();

        res.json(orders);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//EDITAR PEDIDO
exports.updateOrder = async (req, res) => {
    try {

        const mapped = mapOrder(req.body);

        const order = await Order.findOneAndUpdate(
            { orderId: req.params.id },
            mapped,
            { new: true }
        );

        if (!order) {
            return res.status(404).json({ message: "Pedido não encontrado" });
        }

        res.json(order);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//DELETAR PEDIDO
exports.deleteOrder = async (req, res) => {
    try {

        const order = await Order.findOneAndDelete({
            orderId: req.params.id
        });

        if (!order) {
            return res.status(404).json({ message: "Pedido não encontrado" });
        }

        res.json({ message: "Pedido deletado com sucesso" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};