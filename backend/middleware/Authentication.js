const jwt = require("jsonwebtoken");
const Vendor = require("./../models/vendorModel");
const Customer = require("../models/customer");
const bcrypt = require("bcrypt");

const createToken = (id, role) => {
  return jwt.sign({ id, role }, "AAA123456", { expiresIn: "1h" }); // Token expiration
};

// Controller for vendor login
exports.vendorLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the vendor
    const vendor = await Vendor.findOne({ email });

    // Check if the vendor exists and the password is correct
    if (!vendor || !(await bcrypt.compare(password, vendor.password))) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    // Create and send the JWT token in the response
    const token = createToken(vendor._id, "vendor");
    res.status(200).json({ token });
  } catch (error) {
    console.error("Error during vendor login:", error.message);
    res.status(500).json({ message: "An error occurred during login." });
  }
};

// Controller for vendor logout
exports.vendorLogout = (req, res) => {
  res.status(200).json({ message: "Vendor logout successful." });
};

// Controller for customer login
exports.customerLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the customer
    const customer = await Customer.findOne({ email });

    // Check if the customer exists and the password is correct
    if (!customer || !(await bcrypt.compare(password, customer.password))) {
      return res.status(401).json({ message: "Invalid credentials." });
    }
    // Create and send the JWT token in the response
    const token = createToken(customer._id, "customer");
    res.status(200).json({ token });
  } catch (error) {
    console.error("Error during customer login:", error.message);
    res.status(500).json({ message: "An error occurred during login." });
  }
};

// Controller for customer logout
exports.customerLogout = (req, res) => {
  res.status(200).json({ message: "Customer logout successful." });
};

// Controller for vendor registration
exports.vendorRegister = async (req, res) => {
  const { name, email, password, location } = req.body;

  try {
    // Validate registration data
    if (!name || !email || !password || !location) {
      return res
        .status(400)
        .json({ message: "Please fill all required fields." });
    }

    // Check if the vendor with the given email already exists
    let existingVendor = await Vendor.findOne({ email });
    if (existingVendor) {
      return res
        .status(409)
        .json({ message: "Vendor already exists with this email." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new vendor
    const newVendor = new Vendor({
      name,
      email,
      password: hashedPassword,
      location,
    });
    await newVendor.save();

    res.status(201).json({ message: "Vendor registered successfully." });
  } catch (error) {
    console.error("Error registering vendor:", error.message);
    res
      .status(500)
      .json({ message: "An error occurred while registering vendor." });
  }
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
    const newCustomer = new Customer({ name, email, password: hashedPassword });
    await newCustomer.save();

    res.status(201).json({ message: "Customer registered successfully." });
  } catch (error) {
    console.error("Error registering customer:", error.message);
    res
      .status(500)
      .json({ message: "An error occurred while registering customer." });
  }
};
