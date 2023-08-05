const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  quantity: { type: Number, min: 1 },
  // Image: { type: String, required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
