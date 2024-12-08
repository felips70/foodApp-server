const express = require("express");
const { sendDishes } = require("../controllers/dishesController");

const router = express.Router();

/**
 * @openapi
 * /api/dishes:
 *  get:
 *    description: This endpoint is used to get a list of dishes
 *    responses:
 *      200:
 *        description: Returns a list of dishes
 *
*/
router.get('/dishes', sendDishes);

module.exports = router;
