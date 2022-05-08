const ProductModel = require('../models/product.model');
const ClientModel = require('../models/client.model');
const fs = require('fs');
const { promisify } = require('util');
const { uploadErrors } = require('../utils/errors.utils');
const pipeline = promisify(require('stream').pipeline);
const ObjectId = require('mongoose').Types.ObjectId;

module.exports.getProducts = (req, res) => {
  ProductModel.find((err, docs) => {
  if(!err) res.send(docs);
  else console.log('Error to get data : ' + err);
  })
}

module.exports.getLatestProduct = async (req, res) => {
  const products = await ProductModel.find({})
  .sort({releaseDate: -1})
  .limit(4)
  if (!products) {
    res.status(404);
    throw new Error('Latest products not found');
  }
  res.send(products);
}

module.exports.getBestSeller = async (req, res) => {
  const products = await ProductModel.find({})
  .sort({sales: -1})
  .limit(4)
  if (!products) {
    res.status(404);
    throw new Error('Best-seller products not found');
  }
  res.send(products);
}

module.exports.getTrend = async (req, res) => {
  const products = await ProductModel.find({})
  .sort({sales: -1})
  .limit(4)
  if (!products) {
    res.status(404);
    throw new Error('Trending products not found');
  }
  res.send(products);
}

module.exports.getDeals = async (req, res) => {
  const products = await ProductModel.find({price: {$lte: 10}})
  .sort({price: 0})
  .limit(4)
  if (!products) {
    res.status(404);
    throw new Error('Big Deals products not found');
  }
  res.send(products);
}

module.exports.getProduct = (req, res) => {
  if(!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  
  ProductModel.findById(
    req.params.id,
    (err, docs) => {
      if(!err) res.send(docs);
      else console.log(err);
    }
  )
}

module.exports.createProduct = async (req, res) => {
  const newProduct = new ProductModel({
    user: req.body.user,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    genre: req.body.genre,
    description: req.body.description,
    price: req.body.price,
    countInStock: req.body.countInStock,
    releaseDate: new Date().toISOString(),
  });
  try {
    const product = await newProduct.save();
    return res.status(201).json(product);
  } catch (err) {
    return res.status(400).send(err);
  }
  
};

module.exports.updateProduct = (req, res) => {
  if(!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  const updatedRecord = {
    price: req.body.price,
    countInStock: req.body.countInStock
  }

  ProductModel.findByIdAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    { new: true },
    (err, docs) => {
      if(!err) res.send(docs);
      else console.log(err);
    }
  )
  };

module.exports.deleteProduct = (req, res) => {
  if(!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  
  ProductModel.findByIdAndRemove(
    req.params.id,
    (err, docs) => {
      if(!err) res.send(docs);
      else console.log(err);
    }
  )
};