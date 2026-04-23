/**
 * Health Controller
 * Handles root-level API status/health check endpoints
 */

// @desc    Check if API is running
// @route   GET /
// @access  Public
const getApiStatus = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'QuickCare API is running 🚀',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
  });
};

module.exports = { getApiStatus };
