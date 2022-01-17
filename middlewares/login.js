const crypto = require('crypto');

const {
  HTTP_OK_STATUS,
  HTTP_BAD_REQUEST_STATUS,
  MSG_EMAIL_NOT_VALID,
  MSG_PASSWORD_NOT_FOUND,
  MSG_EMAIL_NOT_FOUND,
  MSG_PASSWORD_NOT_VALID,
} = require('../utils/status');

const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  const regex = /\w+@[a-z]+.[a-z]{2,3}/;

  if (!email) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json(MSG_EMAIL_NOT_FOUND);
  }
  
  if (!regex.test(email)) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json(MSG_EMAIL_NOT_VALID);
  }
  next();
};

const validatePassword = async (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json(MSG_PASSWORD_NOT_FOUND);
  }

  if (typeof password !== 'string' || password.length < 6) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json(MSG_PASSWORD_NOT_VALID);
  }
  next();
};

const login = async (req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  res.status(HTTP_OK_STATUS).json({ token });
};

module.exports = {
  validateEmail,
  validatePassword,
  login,
};
