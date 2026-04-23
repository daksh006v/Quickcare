const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// @route   POST /api/v1/auth/register
// @access  Public
router.post('/register', registerUser);

// @route   POST /api/v1/auth/login
// @access  Public
router.post('/login', loginUser);

module.exports = router;
