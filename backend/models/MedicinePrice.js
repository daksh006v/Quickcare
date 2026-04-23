const mongoose = require('mongoose');

const medicinePriceSchema = new mongoose.Schema(
  {
    medicine: {
      type: mongoose.Schema.ObjectId,
      ref: 'Medicine',
      required: [true, 'Please add a medicine ID'],
      index: true,
    },
    pharmacy: {
      type: mongoose.Schema.ObjectId,
      ref: 'Pharmacy',
      required: [true, 'Please add a pharmacy ID'],
      index: true,
    },
    price: {
      type: Number,
      required: [true, 'Please add a price'],
      index: true, // For sorting by price
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Prevent duplicate entries for same medicine + pharmacy combination
medicinePriceSchema.index({ medicine: 1, pharmacy: 1 }, { unique: true });

module.exports = mongoose.model('MedicinePrice', medicinePriceSchema);
