const express = require('express');
const router = express.Router();
const {
  createBooking,
  getMyBookings,
  cancelBooking,
  getDoctorBookings,
} = require('../controllers/bookingController');
const { protect, authorize } = require('../middleware/authMiddleware');

// All booking routes require authentication
router.use(protect);

// User routes
router.post('/', createBooking);
router.get('/my', getMyBookings);
router.put('/:id/cancel', cancelBooking);

// Doctor routes
router.get('/doctor', authorize('doctor', 'admin'), getDoctorBookings);

module.exports = router;
