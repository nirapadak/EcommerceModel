const mongoose = require('mongoose');

const DataModel = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
      maxLength: 100,
    },
    address: {
      type: String,
      trim: true,
    },
    phoneNumber: {
      type: String,
      trim: true,
      minLength: 11,
      maxLength: 11,
    }
  },
  {
  Timestamp: true,
  versionKey: false,
  })

const User = mongoose.Model('User', DataModel);
module.exports = User;
