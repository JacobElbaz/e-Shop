const ClientModel = require("../models/client.model");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.getAllUsers = async (req, res) => {
    const clients = await ClientModel.find().select('-password');
    res.status(200).json(clients);
  };