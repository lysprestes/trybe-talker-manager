const express = require('express');

const {
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateDate,
  validateRate,
} = require('../middlewares/talkerValidate');

const createTalker = require('../middlewares/createTalker');

const talkerRouter = express.Router();

const getAllTalkers = require('../middlewares/getAllTalkers');
const getTalkersById = require('../middlewares/getTalkersById');

talkerRouter.get('/', getAllTalkers);

talkerRouter.post(
  '/', validateToken, validateName, validateAge,
  validateTalk, validateDate, validateRate, createTalker,
);

talkerRouter.get('/:id', getTalkersById);

module.exports = talkerRouter;
