const mongoose = require('mongoose');

const clientSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please add an name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add an password'],
    },
  },
  {
    //automatically create and upate the field
    timestamps: true,
  }
);

module.exports = mongoose.model('client', clientSchema);
