const {
  HTTP_OK_STATUS,
} = require('../utils/status');

const { read } = require('../utils/talker');

const searchTalker = async (req, res) => {
  const { q } = req.query;
  const talkerList = await read();
  const talkerFiltered = talkerList
    .filter((talker) => talker.name.toLowerCase().includes(q.toLowerCase()));
  res.status(HTTP_OK_STATUS).json(talkerFiltered);
  if (!q || q === '') {
    res.status(HTTP_OK_STATUS).json(talkerList);
  }
};

module.exports = searchTalker;
