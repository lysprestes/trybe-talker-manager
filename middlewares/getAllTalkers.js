const { read } = require('../utils/talker');

const getAllTalkers = async (_req, res) => {
  const data = await read();
  res.status(200).json(data);
};

module.exports = getAllTalkers;
