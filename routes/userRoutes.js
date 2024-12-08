const express = require("express");
const { signUp, logIn } = require("../controllers/userController");

const router = express.Router();

/**
 * @openapi
 * /api/user/signup:
 *  post:
 *    summary: User signup
 *    description: This endpoint is used to signup a user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              firstName:
 *                type: string
 *                description: The user's first name
 *              lastName:
 *                type: string
 *                description: The user's last name
 *              email:
 *                type: string
 *                description: The user's email
 *              password:
 *                type: string
 *                description: The user's password
 *            required:
 *              - firstName
 *              - lastName
 *              - email
 *              - password
 *    responses:
 *      200: 
 *        description: Creates a new user and returns the user object and jwt token 
*/
router.post('/user/signup', signUp);

/**
 * @openapi
 * /api/user/login:
 *  post:
 *    summary: User login
 *    description: This endpoint is used to log in a user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                description: The user's email
 *              password:
 *                type: string
 *                description: The user's password
 *            required:
 *              - email
 *              - password
 *    responses:
 *      200:
 *        description: Validates the user log in information and logs user in. Returns user object and jwt token
*/
router.post('/user/login', logIn);

module.exports = router;
