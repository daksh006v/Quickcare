const jwt = require('jsonwebtoken');

/**
 * generateToken
 * Creates a signed JWT containing the user's MongoDB _id as payload.
 *
 * @param {string} userId - MongoDB ObjectId of the authenticated user
 * @returns {string} Signed JWT string
 */
const generateToken = (userId) => {
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  );
};

module.exports = generateToken;
