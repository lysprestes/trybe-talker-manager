const express = require('express');
const bodyParser = require('body-parser');

const getAllTalkers = require('./middlewares/getAllTalkers');
const getTalkersById = require('./middlewares/getTalkersById');
const { validateEmail, validatePassword, login } = require('./middlewares/login');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

app.get('/talker', getAllTalkers);

app.get('/talker/:id', getTalkersById);

app.post('/login', validateEmail, validatePassword, login);
