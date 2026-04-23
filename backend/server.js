const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// ─── Core Middleware ───────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use('/', require('./routes/healthRoutes'));

// Register feature routes here as they are built
app.use('/api/v1/auth',      require('./routes/authRoutes'));
app.use('/api/v1/doctors',   require('./routes/doctorRoutes'));
app.use('/api/v1',           require('./routes/medicineRoutes'));
app.use('/api/v1/bookings',  require('./routes/bookingRoutes'));
// app.use('/api/triage',       require('./routes/triageRoutes'));
// app.use('/api/pharmacies',   require('./routes/pharmacyRoutes'));
// app.use('/api/teleconsult',  require('./routes/teleconsultRoutes'));

// ─── Error Handling (must come AFTER all routes) ───────────────────────────────
app.use(require('./middleware/notFound'));
app.use(require('./middleware/errorHandler'));

// ─── Start Server ──────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`\n🚀 QuickCare API running in [${process.env.NODE_ENV}] mode`);
  console.log(`   → Local: http://localhost:${PORT}\n`);
});
