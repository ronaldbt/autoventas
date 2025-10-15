// backend/utils/ensureUploadsDir.js
const fs = require('fs');
const path = require('path');

function ensureUploadsDir() {
  const dir = path.join(__dirname, '../uploads');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

module.exports = ensureUploadsDir;
