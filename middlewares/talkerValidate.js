const {
  HTTP_UNAUTHORIZED,
  MSG_TOKEN_NOT_FOUND,
} = require('../utils/status');

const validateToken = (req, res, next) => {
  const { token } = req.headers.authorization;
  if (!token) {
    return res.status(HTTP_UNAUTHORIZED).json(MSG_TOKEN_NOT_FOUND);
  }
  next();
};

module.exports = validateToken;