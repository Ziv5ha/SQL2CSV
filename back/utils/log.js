const moment = require('moment');
const log = (msg) => {
  const timestamp = moment().format('ddd, MMM Do YYYY, H:mm:ss');
  console.log(`${timestamp} | ${msg}`);
};

module.exports = { log };
