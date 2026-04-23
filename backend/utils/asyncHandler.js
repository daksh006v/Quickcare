/**
 * asyncHandler
 * Wraps async route handlers to eliminate repetitive try/catch blocks.
 * Any thrown error is automatically forwarded to Express error middleware via next(err).
 *
 * Usage:
 *   router.get('/route', asyncHandler(async (req, res) => { ... }));
 */
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

module.exports = asyncHandler;
