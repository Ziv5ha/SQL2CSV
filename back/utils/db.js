const { HOST, PORT, USER, PASSWORD } = require('./config');

const { Client } = require('pg');

const client = new Client({
  host: HOST,
  port: PORT,
  user: USER,
  password: PASSWORD,
});
const connectToDB = async () => {
  try {
    console.log(client);
    await client.connect();
    console.log('connected to DB');
  } catch (error) {
    console.log('failed connecting to DB');
    console.error(error);
  }
};

module.exports = { connectToDB, client };
