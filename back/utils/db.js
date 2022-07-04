const {
  HOST,
  PORT,
  USER,
  PASSWORD,
  DATABASE,
  CONNECTION_STRING,
} = require('./config');

const { Client } = require('pg');
const { log } = require('./log');

const client = CONNECTION_STRING
  ? new Client({ connectionString: CONNECTION_STRING })
  : new Client({
      host: HOST,
      port: PORT,
      user: USER,
      password: PASSWORD,
      database: DATABASE,
    });
const connectToDB = async () => {
  try {
    await client.connect();
    log('\x1b[33mconnected to:\x1b[0m');
    console.log({
      host: HOST,
      port: PORT,
      database: DATABASE,
      user: USER,
      password: PASSWORD,
    });
  } catch (error) {
    log('\x1b[41mfailed connecting to:\x1b[0m');
    console.log({
      host: HOST,
      port: PORT,
      database: DATABASE,
      user: USER,
      password: PASSWORD,
    });
    console.error(
      'Check if the DB is online and the login info is correct then restart the server'
    );
  }
};

module.exports = { connectToDB, client };
