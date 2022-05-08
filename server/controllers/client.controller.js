const ClientModel = require('../models/client.model');
const Product = require('../models/product.model');
const ObjectID = require('mongoose').Types.ObjectId;

module.exports.getAllUsers = async (req, res) => {
  const clients = await ClientModel.find().select('-password');
  res.status(200).json(clients);
};

module.exports.userInfo = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknown : ' + req.params.id);

  ClientModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log('ID unknown : ' + err);
  }).select('-password');
};

module.exports.updateWishlist = async (req, res) => {
  const {productId} = req.body;
  const client = await ClientModel.findById(req.client._id)
  .select('-password')
  .populate('wishlist', 'name rating price')
  if (client) {
    const alreadyExisted = client.wishlist.find(
      (wish) => wish._id.toString() === productId
    );

    if (!alreadyExisted) {
      const product = await Product.findById(productId).select(
        'name rating price'
      );
      client.wishlist.push(product);
    } else {
      client.wishlist = client.wishlist.filter((wish) => {
        return wish._id.toString() !== productId;
      });
    }

    await client.save();

    res.send(client.wishlist);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
};

module.exports.updateUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await ClientModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          username: req.body.username,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true })
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
