// import vendor mode
const jwt = require("jsonwebtoken");
const Vendor = require("../models/vendorModel");
const Customer = require("../models/customer");
const bcrypt = require("bcrypt");

const saltRounds = 10;

// bcrypt.genSalt(saltRounds, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash, "+", salt, password);
//   });
// });
// create handler function to get all vendors
exports.getAllVendors = async (req, res) => {
  const vendors = await Vendor.find();
  try {
    res.status(200).json({
      result: vendors.length,
      status: "success",
      data: {
        vendors,
      },
    });
  } catch (err) {
    console.log("Error🔥", err);
  }
};

exports.createNewVendor = async (req, res) => {
  try {
    const newVendor = await Vendor.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        newVendor,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

// handler function to get specific vendor
exports.getVendor = async (req, res) => {
  try {
    const specificVendor = await Vendor.findById(req.params.id).populate(
      "products"
    );
    res.status(200).json({
      status: "success",
      data: {
        specificVendor,
      },
    });
  } catch (err) {
    console.log("Error🔥", err);
  }
};

exports.updateVendor = async (req, res) => {
  try {
    const updateVendor = await Vendor.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(201).json({
      status: "success",
      data: {
        vendor: updateVendor,
      },
    });
  } catch (err) {
    console.log("UpdateError🔥💣", err);
  }
};
// handler function to delete specific vendor
exports.deleteVendor = async (req, res) => {
  await Vendor.findByIdAndDelete(req.params.id);
  res.status(204).json({
    vendor: null,
  });
};
