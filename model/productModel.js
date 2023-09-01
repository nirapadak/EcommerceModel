const mongoose = require('mongoose');

const DataModel = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      required:true,
    },
    imageUrl: {
      type: String,
    }



  },
  {
  Timestamp: true,
  versionKey: false,
  })

const Product = mongoose.Model('Product', DataModel);
module.exports = Product;
