const { client } = require('../utils/db');
const {
  createMeasurementsTableTest,
  populateMeasurementsTableTest,
  createReactorIDTableTest,
  populateReactorIDTableTest,
} = require('./testQueries');

const getTest = async (req, res, next) => {
  const result = await client.query(
    "SELECT reactor_id.reactor_name AS Reactor_Name, measurements.controller_id AS controller_id, measurements.temperature AS temperature FROM measurements INNER JOIN reactor_id ON measurements.reactor_id = reactor_id.reactor_id WHERE reactor_id.reactor_name IN ('scrumpe2b', 'ejohnstone5', 'kmoroney2m')"
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
