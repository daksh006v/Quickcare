const express = require('express');
const router = express.Router();
const { getApiStatus } = require('../controllers/healthController');

// GET / → API status
router.get('/', getApiStatus);

module.exports = router;
