const { containsDrop } = require('../helpers/testDrop');
const { client } = require('../utils/db');

const getTables = async (req, res, next) => {
  try {
    const result = await client.query(
      "SELECT table_name FROM information_schema.tables WHERE table_schema != 'pg_catalog' AND table_schema != 'information_schema'"
    );
    const tables = result.rows.map((row) => row.table_name);
    if (tables.length === 0) throw new Error('No tables found');
    res.send(result.rows.map((row) => row.table_name));
  } catch (error) {
    const msg =
      '\x1b[41mOH NO!\x1b[0m something wet srong when searching for tables';
    next({ type: 404, error, msg });
  }
};

const getAttributes = async (req, res, next) => {
  try {
    const { machine } = req.params;
    if (containsDrop(machine)) {
      res.send("don't DROP tables from here");
      return;
    }
    const result = await client.query(`SELECT * FROM ${machine} WHERE false`);
    res.send(result.fields.map((field) => field.name));
  } catch (error) {
    const msg =
      '\x1b[41mOH NO!\x1b[0m something wet srong when searching for attributes';
    next({ type: 404, error, msg });
  }
};

const getReactors = async (req, res, next) => {
  try {
    const { machine } = req.params;
    if (containsDrop(machine)) {
      console.log(machine);
      res.send("don't DROP tables from here");
      return;
    }
    const result = await client.query(
      `SELECT DISTINCT reactor_id.reactor_name FROM ${machine} INNER JOIN reactor_id ON ${machine}.reactor_id = reactor_id.reactor_id`
    );
    res.send(result.rows.map((reactor) => reactor.reactor_name));
  } catch (error) {
    const msg =
      '\x1b[41mOH NO!\x1b[0m something wet srong when searching for reactors';
    next({ type: 404, error, msg });
  }
};

module.exports = { getTables, getAttributes, getReactors };
