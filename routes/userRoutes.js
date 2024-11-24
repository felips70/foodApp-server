const express = require("express");
const { signUp, logIn } = require("../controllers/userController");

const router = express.Router();

router.post('/user/signup', signUp);
router.post('/user/login', logIn);

module.exports = router;
