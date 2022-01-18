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

const editTalker = require('../middlewares/editTalker');

const talkerRouter = express.Router();

const getAllTalkers = require('../middlewares/getAllTalkers');
const getTalkersById = require('../middlewares/getTalkersById');

talkerRouter.get('/', getAllTalkers);

talkerRouter.post(
  '/', validateToken, validateName, validateAge,
  validateTalk, validateDate, validateRate, createTalker,
);

talkerRouter.put(
  '/:id', validateToken, validateName, validateAge,
  validateTalk, validateDate, validateRate, editTalker,
);

talkerRouter.get('/:id', getTalkersById);

module.exports = talkerRouter;
