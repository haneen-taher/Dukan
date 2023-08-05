const mongoose = require('mongoose')
const Order = require('./../models/order')
const Customer = require('../models/customer')
const Vendor = require('../models/vendorModel')
const jwt = require('jsonwebtoken')
// add order

exports.AddOrder = async (req, res) => {
  // create new token
  // const token = jwt.sign()
  try {
    newOrder = await Order.create(req.body)
    res.status(201).json({
      status: 'success',
      data: {
        order: newOrder,
      },
    })
  } catch (err) {
    console.log(err)
  }
}

exports.getAllOrdersCustomer = async (req, res) => {
  try {
    const orders = await Order.find()
    res.status(200).json({
      status: 'success',
      data: {
        orders,
      },
    })
  } catch (err) {
    console.log(err)
  }
}

exports.getAllOrdersVendor = async (req, res) => {
  const Vendor = await Vendor.find(req.body)
  try {
    const orders = await Order.find(Vendor._id)
    res.status(200).json({
      status: 'success',
      data: {
        orders: orders.orders,
      },
    })
  } catch (err) {
    console.log(err)
  }
}
