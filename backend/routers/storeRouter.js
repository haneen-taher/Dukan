const express = require('express');
const storeController = require('./../controller/storeController');
const router = express.Router();

router
.route('/store')
.post(storeController.createStore);