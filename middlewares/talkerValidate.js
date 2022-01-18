const {
  HTTP_UNAUTHORIZED,
  HTTP_BAD_REQUEST_STATUS,
  MSG_TOKEN_NOT_FOUND,
  MSG_TOKEN_NOT_VALID,
  MSG_NAME_NOT_FOUND,
  MSG_NAME_NOT_VALID,
  MSG_AGE_NOT_FOUND,
  MSG_AGE_NOT_VALID,
  MSG_TALK_NOT_VALID,
  MSG_DATE_NOT_VALID,
  MSG_RATE_NOT_VALID,  
} = require('../utils/status');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(HTTP_UNAUTHORIZED).json(MSG_TOKEN_NOT_FOUND);
  }
  if (typeof authorization !== 'string' || authorization.length < 16) {
    return res.status(HTTP_UNAUTHORIZED).json(MSG_TOKEN_NOT_VALID);
  }
  next();
};

const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name || typeof name !== 'string') {
    return res.status(HTTP_BAD_REQUEST_STATUS).json(MSG_NAME_NOT_FOUND);
  }
  if (name.length < 3) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json(MSG_NAME_NOT_VALID);
  }
  next();
};

const validateAge = (req, res, next) => {
  const { age } = req.body;
  if (!age || typeof age !== 'number') {
    return res.status(HTTP_BAD_REQUEST_STATUS).json(MSG_AGE_NOT_FOUND);
  }
  if (age < 18) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json(MSG_AGE_NOT_VALID);
  }
  next();
};

const validateTalk = (req, res, next) => {
  const { talk } = req.body;
  if (!talk) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json(MSG_TALK_NOT_VALID);
  }
  next();
};

const validateDate = (req, res, next) => {
  const { watchedAt } = req.body.talk;
  const regex = /(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d/;

  if (!watchedAt || typeof watchedAt !== 'string') {
    return res.status(HTTP_BAD_REQUEST_STATUS).json(MSG_TALK_NOT_VALID);
  }
  if (!regex.test(watchedAt)) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json(MSG_DATE_NOT_VALID);
  }
  next();
};

const validateRate = (req, res, next) => {
  const { rate } = req.body.talk;
  if (!rate && rate !== 0) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json(MSG_TALK_NOT_VALID);
  }
  if (rate < 1 || rate > 5) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json(MSG_RATE_NOT_VALID);
  }
  next();
};

module.exports = {
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateDate,
  validateRate,
};
