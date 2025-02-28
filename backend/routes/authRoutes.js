const express = require("express");
const router = express.Router();

//Import controller
const { register, login, verifyEmail } = require('../controllers/authController');

//Mapping create
router.post('/signup', register);
router.post('/login', login);
router.post('/verify-email', verifyEmail);

//Export
module.exports = router;