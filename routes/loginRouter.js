const express = require('express');

const loginRouter = express.Router();

const { validateEmail, validatePassword, login } = require('../middlewares/login');

loginRouter.post('/', validateEmail, validatePassword, login);

module.exports = loginRouter;
