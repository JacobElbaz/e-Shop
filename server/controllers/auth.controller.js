const ClientModel = require('../models/client.model');



module.exports.signUp = async (req, res) => {
  const {username, email, password} = req.body

  try {
    const user = await ClientModel.create({username, email, password });
    res.status(201).json({ user: user._id});
  }
  catch(err) {
    res.status(200).send({ err })
  }
}

