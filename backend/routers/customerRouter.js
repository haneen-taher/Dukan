const express = require('express')
const router = express.Router()
const customerController = require('./../controller/customerController')
const loginController = require('./../controller/loginContoller')
const orderController = require('./../controller/orderController')
const authController = require('./../controller/authVendor')

//  Customer profile

// other customer routes
router.route('/').get(customerController.getAllCustomer)

router.route('/register').post(authController.customerRegister)
router.route('/login').post(authController.customerLogin)
router.route('/logout').post(customerController.customerLogout)
router.route('/:id/profile').get(customerController.profileInfo)
router
  .route('/order')
  .post(orderController.AddOrder)
  .get(orderController.getAllOrdersCustomer)
router.route('/:id/order').patch(customerController.updateOrder)
router.route('/:id').post(customerController.setOrder)

router
  .route('/:id')
  .get(customerController.getSpecifiCustomer)
  .patch(customerController.updateCustomer)

module.exports = router
