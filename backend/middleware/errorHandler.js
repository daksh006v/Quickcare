/**
 * Global Error Handling Middleware
 * Must be registered LAST in Express middleware chain (after all routes)
 * Catches all errors passed via next(err)
 */
const errorHandler = (err, req, res, next) => {
  // Log full error stack in development
  if (process.env.NODE_ENV === 'development') {
    console.error('❌ Error:', err.stack);
  } else {
    console.error('❌ Error:', err.message);
  }

  let statusCode = err.statusCode || err.status || 500;
  let message = err.message || 'Internal Server Error';

  // Handle Mongoose duplicate key error (code 11000)
  if (err.code === 11000) {
    statusCode = 400;
    // Special handling for the double-booking index
    if (err.keyPattern && err.keyPattern.doctor === 1 && err.keyPattern.appointmentDate === 1) {
      message = 'Time slot already booked';
    } else {
      message = 'Duplicate field value entered';
    }
  }

  res.status(statusCode).json({
    success: false,
    message: message,
    // Only expose stack trace in development
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

module.exports = errorHandler;
