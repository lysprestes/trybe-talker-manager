const express = require('express');
const bodyParser = require('body-parser');

const talkerUtils = require('./utils/talker');

const { read } = talkerUtils;

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

app.get('/talker', async (_req, res) => {
  const data = await read();
  res.status(200).json(data);
});

app.get('/talker/:id', async (req, res) => {
  const data = await read();
  const talkers = data.find((talker) => talker.id === Number(req.params.id));
  if (!talkers) {
    return res.status(404).json({
      message: 'Pessoa palestrante não encontrada',
    });
  }
  res.status(200).json(talkers);
});
