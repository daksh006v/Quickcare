const mongoose = require('mongoose');
const Medicine = require('../models/Medicine');
const Pharmacy = require('../models/Pharmacy');
const MedicinePrice = require('../models/MedicinePrice');
const asyncHandler = require('../utils/asyncHandler');

/**
 * @desc    Add a new medicine
 * @route   POST /api/v1/medicines
 * @access  Public (for now)
 */
const addMedicine = asyncHandler(async (req, res, next) => {
  const { name, manufacturer, description } = req.body;

  if (!name) {
    res.status(400);
    throw new Error('Please provide a medicine name');
  }

  // Check if medicine already exists (case-insensitive)
  const medicineExists = await Medicine.findOne({ name: name.toLowerCase().trim() });
  if (medicineExists) {
    res.status(400);
    throw new Error('Medicine already exists');
  }

  const medicine = await Medicine.create({
    name,
    manufacturer,
    description,
  });

  res.status(201).json({
    success: true,
    data: medicine,
  });
});

/**
 * @desc    Add a new pharmacy
 * @route   POST /api/v1/pharmacies
 * @access  Public (for now)
 */
const addPharmacy = asyncHandler(async (req, res, next) => {
  const { name, location } = req.body;

  if (!name || !location) {
    res.status(400);
    throw new Error('Please provide pharmacy name and location');
  }

  const pharmacy = await Pharmacy.create({
    name,
    location,
  });

  res.status(201).json({
    success: true,
    data: pharmacy,
  });
});

/**
 * @desc    Add a medicine price entry
 * @route   POST /api/v1/medicine-prices
 * @access  Public (for now)
 */
const addMedicinePrice = asyncHandler(async (req, res, next) => {
  const { medicine, pharmacy, price, inStock } = req.body;

  if (!medicine || !pharmacy || price === undefined) {
    res.status(400);
    throw new Error('Please provide medicine ID, pharmacy ID, and price');
  }

  // Validate ObjectIds
  if (!mongoose.Types.ObjectId.isValid(medicine)) {
    res.status(400);
    throw new Error('Invalid medicine ID format');
  }
  if (!mongoose.Types.ObjectId.isValid(pharmacy)) {
    res.status(400);
    throw new Error('Invalid pharmacy ID format');
  }

  // Check if medicine exists
  const medicineExists = await Medicine.findById(medicine);
  if (!medicineExists) {
    res.status(404);
    throw new Error('Medicine not found');
  }

  // Check if pharmacy exists
  const pharmacyExists = await Pharmacy.findById(pharmacy);
  if (!pharmacyExists) {
    res.status(404);
    throw new Error('Pharmacy not found');
  }

  // Check for duplicate entry
  const existingPrice = await MedicinePrice.findOne({ medicine, pharmacy });
  if (existingPrice) {
    res.status(400);
    throw new Error('Price entry for this medicine and pharmacy already exists');
  }

  const medicinePrice = await MedicinePrice.create({
    medicine,
    pharmacy,
    price,
    inStock: inStock !== undefined ? inStock : true,
  });

  res.status(201).json({
    success: true,
    data: medicinePrice,
  });
});

/**
 * @desc    Search medicine and get prices across pharmacies
 * @route   GET /api/v1/medicines/search
 * @access  Public
 */
const searchMedicine = asyncHandler(async (req, res, next) => {
  const { name } = req.query;

  if (!name) {
    res.status(400);
    throw new Error('Please provide a search name parameter');
  }

  // Partial, case-insensitive search
  const medicine = await Medicine.findOne({
    name: { $regex: name.toLowerCase().trim(), $options: 'i' },
  });

  if (!medicine) {
    return res.status(200).json({
      success: true,
      data: {
        medicine: null,
        prices: [],
      },
    });
  }

  // Get all prices for this medicine and populate pharmacy details
  const prices = await MedicinePrice.find({ medicine: medicine._id })
    .populate({
      path: 'pharmacy',
      select: 'name location',
    })
    .sort({ price: 1 }); // Sort by lowest price first

  res.status(200).json({
    success: true,
    data: {
      medicine,
      prices,
    },
  });
});

module.exports = {
  addMedicine,
  addPharmacy,
  addMedicinePrice,
  searchMedicine,
};
