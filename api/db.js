const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const dbPath = path.resolve(__dirname, '..', 'db.json');
  const dbJson = fs.readFileSync(dbPath, 'utf8');
  const dbData = JSON.parse(dbJson);

  res.json(dbData);
};
