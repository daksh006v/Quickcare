const express = require('express');
const router = express.Router();
const {
  addDoctor,
  getDoctors,
  getDoctorById,
} = require('../controllers/doctorController');
const { protect, authorize } = require('../middleware/authMiddleware');

// Public routes
router.get('/', getDoctors);
router.get('/:id', getDoctorById);

// Protected routes (Admin or Doctor)
router.post('/', protect, authorize('admin', 'doctor'), addDoctor);

module.exports = router;
