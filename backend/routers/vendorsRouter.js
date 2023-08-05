const express = require("express");
const vendorController = require(`${__dirname}/../controller/vendorController.js`);
const authController = require("./../controller/authVendor");
const productController = require(`./../controller/productsController`);

// const orderController = require('./../controller/orderController');

const router = express.Router();

router
  .route("/")
  .get(vendorController.getAllVendors)
  .post(vendorController.createNewVendor);

router
  .route("/:id")
  .get(vendorController.getVendor)
  .patch(vendorController.updateVendor)
  .delete(vendorController.deleteVendor);

router.route("/register").post(authController.registerVendor);
router.route("/login").post(authController.vendorLogin);
router.route("/store").post(productController.addProduct);
router.route("/store").get(productController.getAllProducts);

module.exports = router;
