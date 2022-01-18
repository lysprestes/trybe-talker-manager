const {
  HTTP_OK_STATUS,
} = require('../utils/status');

const { read, write } = require('../utils/talker');

const editTalker = async (req, res) => {
  const talkerList = await read();
  const talkerIndex = talkerList.findIndex((talker) => talker.id === Number(req.params.id));
  talkerList[talkerIndex] = {
    id: Number(req.params.id),
    ...req.body,
  };
  await write(talkerList);
  res.status(HTTP_OK_STATUS).json({
    id: Number(req.params.id),
    ...req.body,
  });
};

module.exports = editTalker;
