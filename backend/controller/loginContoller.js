const jwt = require("jsonwebtoken");
const Vendor = require("./../");
const Customer = require("../models/customer");
const bcrypt = require("bcrypt");

//Controller for customer login
exports.customerLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the customer
    const customer = await Customer.findOne({ email });
    const queryString = req.query;
    const query = await Customer.find(queryString);
    // Check if the customer exists and the password is correct

    if (!customer || !(await bcrypt.compare(password, customer.password))) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    console.log(query);
    const token = createToken(customer._id, "customer");
    res.status(200).json({
      status: "success",
      data: {
        query,
      },
      token,
    });
    // Create and send the JWT token in the response
    // res.status(200).json();
  } catch (error) {
    console.error("Error during customer login:", error.message);
    res.status(500).json({ message: "An error occurred during login." });
  }
};

