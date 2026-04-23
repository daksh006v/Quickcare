const mongoose = require('mongoose');
const Booking = require('../models/Booking');
const Doctor = require('../models/Doctor');
const asyncHandler = require('../utils/asyncHandler');

/**
 * @desc    Create a new booking
 * @route   POST /api/v1/bookings
 * @access  Private
 */
const createBooking = asyncHandler(async (req, res, next) => {
  const { doctor, appointmentDate, notes } = req.body;
  const user = req.user.id;

  if (!doctor || !appointmentDate) {
    res.status(400);
    throw new Error('Please provide doctor ID and appointment date');
  }

  // Validate doctor ObjectId
  if (!mongoose.Types.ObjectId.isValid(doctor)) {
    res.status(400);
    throw new Error('Invalid doctor ID format');
  }

  // Check if doctor exists
  const doctorExists = await Doctor.findById(doctor);
  if (!doctorExists) {
    res.status(404);
    throw new Error('Doctor not found');
  }

  // Validate appointment date is in the future
  const parsedDate = new Date(appointmentDate);
  if (isNaN(parsedDate)) {
    res.status(400);
    throw new Error('Invalid appointment date format');
  }
  
  if (parsedDate < new Date()) {
    res.status(400);
    throw new Error('Appointment date must be in the future');
  }

  // Time validation: exact hour (00) or half-hour (30) only
  const minutes = parsedDate.getMinutes();
  const seconds = parsedDate.getSeconds();
  const milliseconds = parsedDate.getMilliseconds();
  
  if ((minutes !== 0 && minutes !== 30) || seconds !== 0 || milliseconds !== 0) {
    res.status(400);
    throw new Error('Bookings are only allowed on the hour (e.g. 10:00) or half-hour (e.g. 10:30)');
  }

  // Prevent multiple users from booking the same doctor at the same time
  const existingBooking = await Booking.findOne({
    doctor,
    appointmentDate: parsedDate,
    status: { $ne: 'cancelled' }
  });

  if (existingBooking) {
    res.status(400);
    throw new Error('Doctor is already booked for this time slot');
  }

  const booking = await Booking.create({
    user,
    doctor,
    appointmentDate: parsedDate,
    notes,
  });

  res.status(201).json({
    success: true,
    data: booking,
  });
});

/**
 * @desc    Get all bookings for logged-in user
 * @route   GET /api/v1/bookings/my
 * @access  Private
 */
const getMyBookings = asyncHandler(async (req, res, next) => {
  const bookings = await Booking.find({ user: req.user.id })
    .populate({
      path: 'doctor',
      select: 'name specialization location clinicName',
    })
    .sort({ appointmentDate: 1 });

  res.status(200).json({
    success: true,
    count: bookings.length,
    data: bookings,
  });
});

/**
 * @desc    Cancel a booking
 * @route   PUT /api/v1/bookings/:id/cancel
 * @access  Private
 */
const cancelBooking = asyncHandler(async (req, res, next) => {
  const bookingId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(bookingId)) {
    res.status(400);
    throw new Error('Invalid booking ID format');
  }

  const booking = await Booking.findById(bookingId);

  if (!booking) {
    res.status(404);
    throw new Error('Booking not found');
  }

  // Ensure the booking belongs to the logged-in user
  if (booking.user.toString() !== req.user.id) {
    res.status(403);
    throw new Error('Not authorized to cancel this booking');
  }

  if (booking.status === 'cancelled') {
    res.status(400);
    throw new Error('Booking is already cancelled');
  }

  booking.status = 'cancelled';
  await booking.save();

  res.status(200).json({
    success: true,
    data: booking,
  });
});

/**
 * @desc    Get all bookings for the logged-in doctor
 * @route   GET /api/v1/bookings/doctor
 * @access  Private (Doctor role only)
 */
const getDoctorBookings = asyncHandler(async (req, res, next) => {
  // First, find the doctor profile linked to this user
  // (Assuming req.user.id is the User who is a doctor, we need their Doctor profile)
  // Depending on how Doctor is linked to User, we find it:
  const doctorProfile = await Doctor.findOne({ createdBy: req.user.id });

  if (!doctorProfile) {
    res.status(404);
    throw new Error('Doctor profile not found for this user');
  }

  const bookings = await Booking.find({ doctor: doctorProfile._id })
    .populate({
      path: 'user',
      select: 'name email',
    })
    .sort({ appointmentDate: 1 });

  res.status(200).json({
    success: true,
    count: bookings.length,
    data: bookings,
  });
});

module.exports = {
  createBooking,
  getMyBookings,
  cancelBooking,
  getDoctorBookings,
};
