const fs = require('fs');

const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017',
  port: process.env.PORT || 8000,
  libraryPath: './music',
};

// Local config
try {
  const filename = require.resolve('./config.local');
  const local = fs.readFileSync(filename, 'utf8');
  config.libraryPath = local;
} catch (err) {
  console.log('no local config present', err); // eslint-disable-line no-console
}

export default config;
