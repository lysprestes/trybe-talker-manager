const express = require('express');
const bodyParser = require('body-parser');

const { HTTP_OK_STATUS, PORT } = require('./utils/status');

const loginRouter = require('./routes/loginRouter');
const talkerRouter = require('./routes/talkerRouter');

const app = express();
app.use(bodyParser.json());

app.use('/login', loginRouter);
app.use('/talker', talkerRouter);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
