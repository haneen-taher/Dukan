const express = require("express");
const Controller = require(`${__dirname}/../controller/productsController`);
const router = express.Router();

router.route("/").get(Controller.getAllProducts).post(Controller.addProduct);
router.route("/:id").get(Controller.getSpecificProducts);

module.exports = router;
