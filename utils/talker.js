const fs = require('fs/promises');

async function read() {
  const data = await fs.readFile('./talker.json', 'utf8');
  return JSON.parse(data);
}

async function write(data) {
  await fs.writeFile('./talker.json', data);
}

module.exports = {
  read,
  write,
};