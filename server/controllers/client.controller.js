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
  const {productId, userId} = req.body;
  const client = await ClientModel.findById(userId);
  if (client) {
    const alreadyExisted = client.wishlist.find(
      (wish) => wish._id.toString() === productId
    );
    if (!alreadyExisted) {
      const product = await Product.findById(productId);
      client.wishlist.push(product);
    } else {
      client.wishlist = client.wishlist.filter((wish) => {
        return wish._id.toString() !== productId;
      });
    }

    client.save();

    res.send(client.wishlist);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
};

module.exports.updateUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

    const { username, password } = req.body;

    const user = await ClientModel.findById(req.params.id);
  
    if (user) {
      user.username = username || user.username;
      user.password = password || user.password;
  
      const updateUser = await user.save();
  
      res.send({name: updateUser.name,});
    } else {
      res.status(404);
      throw new Error('User not found');
    }
};

module.exports.updatePassword = async (req, res) => {
  const {email, password} = req.body;
  try{
    const user = await ClientModel.findOne({email});
    if (user) {

      user.password = password || user.password;
  
      const updateUser = await user.save();
  
      res.send({name: updateUser.name,});
    } else {
      res.status(404);
      throw new Error('User not found');
    }

  }catch (err){
    res.status(404);
    throw new Error('User not found');
  }

}

module.exports.updateUsername = async (req, res) => {
  const {email, username} = req.body;
  console.log(email);
  try{
    const user = await ClientModel.findOne({email});
    console.log(user);
    if (user) {

      user.username = username || user.username;
  
      const updateUser = await user.save();
  
      res.send({name: updateUser.name,});
    } else {
      res.status(404);
      throw new Error('User not found');
    }

  }catch (err){
    res.status(404);
    throw new Error('User not found');
  }

}
