const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a doctor name'],
      trim: true,
    },
    specialization: {
      type: String,
      required: [true, 'Please add a specialization'],
      trim: true,
    },
    experience: {
      type: Number,
      required: [true, 'Please add experience in years'],
    },
    location: {
      type: String,
      required: [true, 'Please add a location'],
      trim: true,
    },
    clinicName: {
      type: String,
      required: [true, 'Please add a clinic name'],
      trim: true,
    },
    rating: {
      type: Number,
      default: 0,
      min: [0, 'Rating must be at least 0'],
      max: [5, 'Rating must not be more than 5'],
    },
    consultationFee: {
      type: Number,
      required: [true, 'Please add a consultation fee'],
    },
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Doctor', doctorSchema);
