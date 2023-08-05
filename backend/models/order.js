const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customer: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
  ],
  product: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  ],
  quantity: { type: Number, min: 1 },
  total: { type: Number, min: 0 },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
