const { read } = require('../utils/talker');

const getTalkersById = async (req, res) => {
  const data = await read();
  const talkers = data.find((talker) => talker.id === Number(req.params.id));
  if (!talkers) {
    return res.status(404).json({
      message: 'Pessoa palestrante não encontrada',
    });
  }
  res.status(200).json(talkers);
};

module.exports = getTalkersById;
