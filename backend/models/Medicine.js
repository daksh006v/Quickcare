const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a medicine name'],
      lowercase: true,
      trim: true,
      unique: true, // Prevent duplicate medicine names
      index: true,  // For fast search
    },
    manufacturer: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Medicine', medicineSchema);
