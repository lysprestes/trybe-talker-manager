const {
  HTTP_NO_CONTENT_STATUS,
} = require('../utils/status');

const { read, write } = require('../utils/talker');

const deleteTalker = async (req, res) => {
  const talkerList = await read();
  const talkerFiltered = talkerList.filter((talker) => talker.id !== Number(req.params.id));
  await write(talkerFiltered);
  res.status(HTTP_NO_CONTENT_STATUS).json({
    id: Number(req.params.id),
    ...req.body,
  });
};

module.exports = deleteTalker;
