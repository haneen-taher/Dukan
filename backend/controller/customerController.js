const jwt = require("jsonwebtoken");
const Vendor = require("./../");
const Customer = require("../models/customer");
const bcrypt = require("bcrypt");
const { json } = require("express");

const createToken = (id, role) => {
  return jwt.sign({ id, role }, "AAA123456"); // Token expiration
};

exports.getAllCustomer = async (req, res) => {
  const query = await Customer.find(req.query);
  console.log(query);
  res.status(200).json({
    data: {
      query,
    },
  });
};
exports.getSpecifiCustomer = async (req, res) => {
  try {
    const currentCustomer = await Customer.findById(req.params.id);
    res.status(200).json({
     
      status: "success",
      data: {
        currentCustomer,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "not found",
      massage: err,
    });
  }
};
//

exports.setOrder = async (req, res) => {
  try {
    const currentCustomer = await Customer.findById(req.params.id);
    const newProduct = req.body;
    res.status(200),
      json({
        status: "success",
        data: {
          newProduct,
        },
      });
  } catch (err) {}
};
// exports.updateCustomer=as
exports.updateCustomer = async (req, res) => {
  try {
    const updateCustomer = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(201).json({
      status: "success",
      data: {
        customer: updateCustomer,
      },
    });
  } catch (err) {
    console.log("UpdateError🔥💣", err);
  }
};
// Controller for customer login
exports.customerLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the customer
    const customer = await Customer.findOne({ email });
    const queryString = req.query;
    const query = await Customer.find(queryString);
    // Check if the customer exists and the password is correct
    const hashedPassword = await bcrypt.hash(password, 10);
    if (!customer || !(await bcrypt.compare(password, customer.password))) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    console.log(query);
    const token = createToken(customer._id, "customer");
    res.status(200).json({
      status: "success",
      token,
    });
    // Create and send the JWT token in the response
    // res.status(200).json();
  } catch (error) {
    console.error("Error during customer login:", error.message);
    res.status(500).json({ message: "An error occurred during login." });
  }
};

// profile handler function

exports.profileInfo = async (req, res) => {
  // Access the customer's data from req.user (decoded token)
  const customerId = await req.user.id;
  res.status(200).json({ message: "Welcome to your customer profile." });
};

// Controller for customer logout
exports.customerLogout = (req, res) => {
  res.status(200).json({ message: "Customer logout successful." });
};

// Controller for customer registration
exports.customerRegister = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Validate registration data
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Please fill all required fields." });
    }

    // Check if the customer with the given email already exists
    let existingCustomer = await Customer.findOne({ email });
    if (existingCustomer) {
      return res
        .status(409)
        .json({ message: "Customer already exists with this email." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new customer and save to the database
    const newCustomer = await Customer.create({
      email: req.body.email,
      name: req.body.name,
      password: hashedPassword,
    });

    res.status(201).json({
      status: "success",
      data: {
        customer: newCustomer,
      },
    });
  } catch (error) {
    console.error("Error registering customer:", error.message);
    res
      .status(500)
      .json({ message: "An error occurred while registering customer." });
  }
};




// Add Orders
exports.updateOrder = async (req, res) => {
  try {
    const customerId = await req.params.id;
    console.log(req.body);
    const customer = await Customer.findByIdAndUpdate(customerId, req.body, {
      new: true,
    }).populate({ path: "orders", select: "-customer -__v" });
    res.status(200).json({
      data: {
        customer,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
