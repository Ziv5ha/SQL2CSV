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
    "SELECT reactor_id.reactor_name AS Reactor_Name, TO_CHAR(date_time, 'D-MM-YYYY HH24:MI') FROM measurements_three_test INNER JOIN reactor_id ON measurements_three_test.reactor_id = reactor_id.reactor_id WHERE reactor_name IN ('Lori') AND date_time BETWEEN '2022-07-04 09:52:31' AND '2022-07-04 12:52:31'"
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
