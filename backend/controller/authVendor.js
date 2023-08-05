const Vendor = require('./../models/vendorModel')
const Customer = require('./../models/customer')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// generate token
const signing = (id, key) => {
  return jwt.sign({ id: id }, key /*secret_key*/)
}

// register handler Function
exports.registerVendor = async (req, res) => {
  const newVendor = await Vendor.create({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    products: req.body.products,
    storeName: req.body.storeName,
    orders: req.body.orders,
  })
  // create token
  const token = signing(newVendor._id, process.env.PRIVATE_KEY_VENDOR)
  res.status(201).json({
    status: 'success',
    token: token,
    data: {
      vendor: newVendor,
    },
  })
}

// Controller for vendor logout
exports.vendorLogout = (req, res) => {
  res.status(200).json({ message: 'Vendor logout successful.' })
}

// Controller for vendor login
exports.vendorLogin = async (req, res) => {
  try {
    const { email, password } = req.body
    //1) check email and password if exist
    if (!email || !password) {
      return res.status(400).json({
        message: 'please provide password or email',
      })
    }
    //2) check user and password is correct
    const Ven = await Vendor.findOne({ email })
    const correct = await Ven.correctPassword(password, Ven.password)
    console.log(Ven)
    if (!Ven || !correct) {
      return res.status(400).json({
        message: 'incorrect password or email',
      })
    }
    const token = signing(Ven._id, process.env.PRIVATE_KEY_VENDOR)
    // 3)everything ok , send token\
    return res.status(200).json({
      token,
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      data: {
        err,
      },
    })
  }
}






//Customers
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

// exports.customerLogin = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Find the customer
//     const customer = await Customer.findOne({ email });

//     // Check if the customer exists and the password is correct
//     if (!customer || !(await bcrypt.compare(password, customer.password))) {
//       return res.status(401).json({ message: "Invalid credentials." });
//     }
//     // Create and send the JWT token in the response
//     const token = createToken(customer._id, "customer");
//     res.status(200).json({ token });
//   } catch (error) {
//     console.error("Error during customer login:", error.message);
//     res.status(500).json({ message: "An error occurred during login." });
//   }
// };

exports.customerLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
 // Find the customer
const customer = await Customer.findOne({ email });

// Check if email and password exist
if (!email || !password) {
  return res.status(400).json({ message: "Please provide email and password." });
}

// Check if the customer exists and the password is correct
else if (!customer || !(await bcrypt.compare(password, customer.password))) {
  return res.status(401).json({ message: "Incorrect email or password." });
}else {

    // 3) Create and send the JWT token in the response
    const token = signing(customer._id, process.env.PRIVATE_KEY_CUSTOMER);
    res.status(200).json({ token, customerId: customer._id });
  }
  } catch (error) {
    console.error("Error during customer login:", error.message);
    res.status(500).json({ message: "An error occurred during login." });
  }
};

