const ClientModel = require('../models/client.model');
const jwt = require('jsonwebtoken');


const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
  return jwt.sign({id}, process.env.TOKEN_SECRET, {
    expiresIn: maxAge
  })
};


module.exports.signUp = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await ClientModel.create({ username, email, password });
    res.status(201).json({ user: user._id });
  } catch (err) {
    res.status(200).send({ err });
  }
};

module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const client = await ClientModel.login( email, password );

    const token = createToken(client._id);
    res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge});
    res.status(200).json({ client: client._id})
  } catch (err) {
    res.status(200).send({ err });
  }
};

module.exports.logout = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1});
  res.redirect('/');

}


