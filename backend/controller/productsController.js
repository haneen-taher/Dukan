const Product = require("../models/productsModel");

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({
    result: products.length,
    status: "success",
    data: {
      products,
    },
  });
};
exports.getSpecificProducts = async (req, res) => {
  try {
    const products = await Product.findById(req.params.id);
    res.status(200).json({
      result: products.length,
      status: "success",
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "not found",
      massage: err,
    });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.json({
      newProduct,
    });
  } catch (err) {
    console.log(err);
  }
};
