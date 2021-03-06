const jsonToCsv = require('../helpers/jsonToCsv');
const { containsDrop } = require('../helpers/testDrop');
const { client } = require('../utils/db');
const { log } = require('../utils/log');

const createCSV = async (req, res, next) => {
  try {
    // const { tables, attributes, time } = req.body;
    const { query } = req.body;
    log(`\n${query}`);
    if (containsDrop(query)) {
      res.send("don't DROP tables from here");
      return;
    }
    const data = await client.query(query);
    // const data = await client.query(
    //   `SELECT ${attributes.join(', ')} FROM ${tables.join(
    //     ', '
    //   )} WHERE date_time BETWEEN '${time.start}' AND '${time.end}'`
    // );
    jsonToCsv(data.rows, res);
  } catch (error) {
    const msg =
      '\x1b[41mOH NO!\x1b[0m Something went wrong when converting the query to CSV';
    next({ type: 404, error, msg });
  }
};

const downloadCSV = (req, res, next) => {
  res.download('./temp/data.csv', 'data.csv');
  console.log('sent file');
};

module.exports = { downloadCSV, createCSV };
