const yaml = require('js-yaml');
const fs = require('fs');

const getFromFile = function getFromFile() {
  if (fs.existsSync('src/config.yml')) {
    return yaml.safeLoad(fs.readFileSync('src/config.yml', 'utf8'));
  }
  if (fs.existsSync('src/config.yaml')) {
    return yaml.safeLoad(fs.readFileSync('src/config.yaml', 'utf8'));
  }
  if (fs.existsSync('src/config.json')) {
    return JSON.parse(fs.readFileSync('src/config.json', 'utf8'));
  }
  throw new Error('Config file not found');
};

module.exports = {
  getFromFile,
};
