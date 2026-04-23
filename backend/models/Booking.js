const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Please add a user ID'],
      index: true,
    },
    doctor: {
      type: mongoose.Schema.ObjectId,
      ref: 'Doctor',
      required: [true, 'Please add a doctor ID'],
      index: true,
    },
    appointmentDate: {
      type: Date,
      required: [true, 'Please add an appointment date'],
      index: true,
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'cancelled'],
      default: 'pending',
    },
    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Database-level protection: Prevent double-booking same doctor at same time
bookingSchema.index(
  { doctor: 1, appointmentDate: 1 },
  {
    unique: true,
    partialFilterExpression: {
      status: { $ne: 'cancelled' },
    },
  }
);

module.exports = mongoose.model('Booking', bookingSchema);
