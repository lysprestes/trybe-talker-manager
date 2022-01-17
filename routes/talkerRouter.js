const express = require('express');

const talkerRouter = express.Router();

const getAllTalkers = require('../middlewares/getAllTalkers');
const getTalkersById = require('../middlewares/getTalkersById');

talkerRouter.get('/', getAllTalkers);

talkerRouter.get('/:id', getTalkersById);

module.exports = talkerRouter;
