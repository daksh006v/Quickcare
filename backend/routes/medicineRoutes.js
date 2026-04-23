const express = require('express');
const router = express.Router();
const {
  addMedicine,
  addPharmacy,
  addMedicinePrice,
  searchMedicine,
} = require('../controllers/medicineController');

// Medicine routes
router.post('/medicines', addMedicine);
router.get('/medicines/search', searchMedicine);

// Pharmacy routes
router.post('/pharmacies', addPharmacy);

// Medicine Price routes
router.post('/medicine-prices', addMedicinePrice);

module.exports = router;
