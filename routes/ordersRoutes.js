const express = require("express");
const { createOrder } = require("../controllers/ordersController");

const router = express.Router();

router.post('/orders/create-order', createOrder);

module.exports = router;