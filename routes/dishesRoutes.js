const express = require("express");
const { sendDishes } = require("../controllers/dishesController");

const router = express.Router();

router.get('/dishes', sendDishes);

module.exports = router;
