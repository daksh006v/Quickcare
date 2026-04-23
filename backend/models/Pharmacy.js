const mongoose = require('mongoose');

const pharmacySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a pharmacy name'],
      trim: true,
    },
    location: {
      type: String,
      required: [true, 'Please add a location'],
      lowercase: true,
      trim: true,
      index: true, // For fast location-based search
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Pharmacy', pharmacySchema);
