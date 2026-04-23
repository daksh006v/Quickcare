const Doctor = require('../models/Doctor');
const asyncHandler = require('../utils/asyncHandler');

/**
 * @desc    Add a new doctor
 * @route   POST /api/v1/doctors
 * @access  Private/Admin or Doctor
 */
const addDoctor = asyncHandler(async (req, res, next) => {
  // Add user to req.body so it's saved as createdBy
  req.body.createdBy = req.user.id;

  const doctor = await Doctor.create(req.body);

  res.status(201).json({
    success: true,
    data: doctor,
  });
});

/**
 * @desc    Get all doctors with optional filtering
 * @route   GET /api/v1/doctors
 * @access  Public
 */
const getDoctors = asyncHandler(async (req, res, next) => {
  const { location, specialization, minRating, maxFee } = req.query;

  // Build query object
  let query = {};

  if (location) {
    // Case-insensitive regex match for location
    query.location = { $regex: location, $options: 'i' };
  }

  if (specialization) {
    // Case-insensitive regex match for specialization
    query.specialization = { $regex: specialization, $options: 'i' };
  }

  if (minRating) {
    query.rating = { ...query.rating, $gte: Number(minRating) };
  }

  if (maxFee) {
    query.consultationFee = { ...query.consultationFee, $lte: Number(maxFee) };
  }

  const doctors = await Doctor.find(query);

  res.status(200).json({
    success: true,
    count: doctors.length,
    data: doctors,
  });
});

/**
 * @desc    Get single doctor by ID
 * @route   GET /api/v1/doctors/:id
 * @access  Public
 */
const getDoctorById = asyncHandler(async (req, res, next) => {
  const doctor = await Doctor.findById(req.params.id);

  if (!doctor) {
    res.status(404);
    throw new Error('Doctor not found');
  }

  res.status(200).json({
    success: true,
    data: doctor,
  });
});

module.exports = {
  addDoctor,
  getDoctors,
  getDoctorById,
};
