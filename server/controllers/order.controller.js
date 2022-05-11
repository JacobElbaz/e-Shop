const OrderModel = require('../models/order.model');
const ObjectID = require('mongoose').Types.ObjectId;

module.exports.getOrders = async (req, res) => {
    const orders = await OrderModel.find()
        .populate('client', 'id name');
    res.send(orders);
};

//updateOrdertobedeliverd

module.exports.createOrder = async (req, res) => {
    const {
        client,
        orderItems,
        shippingAddress,
        paymentMethod,
        totalPrice,
    } = req.body

    if (orderItems && orderItems.length === 0) {
        res.status(400);
        console.log('No Item');
    } else {
        const order = new OrderModel({
            client,
            orderItems,
            shippingAddress,
            paymentMethod,
            totalPrice,
        });

        await order.save();
        res.status(200).send(order);
    }
};

module.exports.getMyOrders = async (req, res) => {
    const id = req.params.id;
    const orders = await OrderModel.find({ client: req.params.id })
        .populate("client", "name");

    if (orders) {
        res.status(201).send(orders)
    } else {
        res.status(400).send('order not found');
    }
};

module.exports.updateStatus = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknow : ' + req.params.id);

    try {
        await OrderModel.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    status: req.body.status,
                },
            },
            { new: true, upsert: true, setDefaultsOnInsert: true })
            .then((data) => res.send(data))
            .catch((err) => res.status(500).send({ message: err }));
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};


