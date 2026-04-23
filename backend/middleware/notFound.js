/**
 * 404 Not Found Middleware
 * Catches requests to routes that don't exist
 * Must be registered AFTER all valid routes
 */
const notFound = (req, res, next) => {
  const error = new Error(`Route not found: ${req.originalUrl}`);
  error.statusCode = 404;
  next(error); // Forward to global error handler
};

module.exports = notFound;
