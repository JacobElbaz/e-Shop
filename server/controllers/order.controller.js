const OrderModel = require('../models/order.model');
const ProductModel = require('../models/product.model');
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
        deliveredAt,
    } = req.body

    const payementDate = new Date().toISOString();

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
            payementDate,
            deliveredAt,
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

module.exports.updateSales = async (req, res) => {
    
    const id = req.body;
    try{
        const order = await OrderModel.findOne(id);
        if(order){
            const length = order.orderItems.length;
            const orderItems = order.orderItems;
            for(i = 0; i < length; i++ ){
                const product = await ProductModel.findById(orderItems[i]._id)
                console.log(product)
                console.log(product._id)
                console.log(orderItems[i]._id)
                console.log(product.sales);
                console.log(parseInt(orderItems[i].qty));
                if(product._id.toString() === orderItems[i]._id.toString()){
                    product.sales += parseInt(orderItems[i].qty);
                    product.countInStock -= parseInt(orderItems[i].qty);
                    console.log(product.sales);
                    await product.save();
                }
            }  
            res.send({order: id,});
        } else {
            res.status(404);
            throw new Error('Order not found');
        }
    }catch (err){
        res.status(404);
        throw new Error('Order not found');
      }

    
}



