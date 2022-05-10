const OrderModel = require('../models/order.model');
const ObjectID = require('mongoose').Types.ObjectId;

module.exports.getOrders= async (req, res) => {
    const orders = await OrderModel.find()
    .populate('client', 'id name');
    res.send(orders);
};

//updateOrdertobedeliverd

module.exports.createOrder = async (req, res) =>{
    const {
        orderItems, 
        shippingAddress,
        paymentMethod,
        totalPrice,
    } = req.body

    if (orderItems && orderItems.length === 0){
        res.status(400);
        console.log('No Item');
    } else {
        const order = new OrderModel ({
            client: req.body.client,
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
    const orders = await OrderModel.find({client: req.params.id})
    .populate("client", "name");

    if(orders){
        res.status(201).send(orders)
    } else {
        res.status(400).send('order not found');
    }
};


