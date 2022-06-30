const { client } = require('../utils/db');
const {
  createMeasurementsTableTest,
  populateMeasurementsTableTest,
  createReactorIDTableTest,
  populateReactorIDTableTest,
} = require('./testQueries');

const getTest = async (req, res, next) => {
  const result = await client.query(
    "SELECT * FROM measurements where date_time BETWEEN '2022-04-14 11:36:40' AND '2022-04-15 11:36:40'"
  );
  res.send(result.rows);
};

const testFunc = async (req, res, next) => {
  await client.query('DROP TABLE IF EXISTS measurements');
  await client.query('DROP TABLE IF EXISTS reactor_id');
  await client.query(createMeasurementsTableTest);
  await client.query(createReactorIDTableTest);
  await client.query(populateMeasurementsTableTest);
  await client.query(populateReactorIDTableTest);
  console.log('test table restarted');
  res.send('test table restarted');
};

module.exports = { testFunc, getTest };
