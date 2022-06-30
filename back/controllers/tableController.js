const { containsDrop } = require('../helpers/testDrop');
const { client } = require('../utils/db');

const getMachines = async (req, res, next) => {
  try {
    const result = await client.query(
      "SELECT * FROM pg_catalog.pg_tables WHERE schemaname != 'pg_catalog' AND schemaname != 'information_schema'"
    );
    res.send(result.rows.map((row) => row.tablename));
  } catch (error) {
    console.log(error);
  }
};

const getAttributes = async (req, res, next) => {
  try {
    const { machine } = req.params;
    if (containsDrop(machine)) {
      console.log(machine);
      res.send("don't DROP tables from here");
      return;
    }
    const result = await client.query(`SELECT * FROM ${machine} WHERE false`);
    res.send(result.fields.map((field) => field.name));
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getMachines, getAttributes };
