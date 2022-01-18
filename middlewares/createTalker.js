const {
  HTTP_CREATED_STATUS,
} = require('../utils/status');

const { read, write } = require('../utils/talker');

const createTalker = async (req, res) => {
  const talkerList = await read();
  const newTalker = req.body;
  newTalker.id = talkerList[talkerList.length - 1].id + 1;
  talkerList.push(newTalker);
  await write(talkerList);
  res.status(HTTP_CREATED_STATUS).json(newTalker);
};

module.exports = createTalker;
