const { client } = require('../utils/db');
const { log } = require('../utils/log');
const {
  createMeasurementsTableTest,
  populateMeasurementsTableTest,
  createReactorIDTableTest,
  populateReactorIDTableTest,
} = require('./testQueries');

const getTest = async (req, res, next) => {
  const result = await client.query(
    "SELECT table_name FROM information_schema.tables WHERE table_schema != 'pg_catalog' AND table_schema != 'information_schema'"
  );
  res.send(result.rows);
};

const testFunc = async (req, res, next) => {
  await client.query('DROP TABLE IF EXISTS measurements_three_test');
  await client.query('DROP TABLE IF EXISTS reactor_id');
  await client.query(createMeasurementsTableTest);
  await client.query(createReactorIDTableTest);
  await client.query(populateMeasurementsTableTest);
  await client.query(populateReactorIDTableTest);
  log('test table restarted');
  res.send('test table restarted');
};

module.exports = { testFunc, getTest };
