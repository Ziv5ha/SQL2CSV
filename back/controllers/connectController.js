const { client } = require('../utils/db');

const reconnect = async (req, res, next) => {
  try {
    console.log('connecting...');
    await client.connect();
    console.log('connected to DB');
    res.send('connected to DB');
  } catch (error) {
    const msg = 'failed connecting to DB';
    next({ type: 503, error, msg });
  }
};

module.exports = { reconnect };
