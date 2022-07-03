const { HOST, PORT, USER, PASSWORD } = require('./config');

const { Client } = require('pg');

let client = new Client({
  host: HOST,
  port: PORT,
  user: USER,
  password: PASSWORD,
});
const connectToDB = async () => {
  try {
    await client.connect();
    console.log('connected to DB');
  } catch (error) {
    console.error('failed connecting to DB');
    console.error('Check if the DB is online and restart the server');
  }
};

const reconnectToDB = async () => {
  client = new Client({
    host: HOST,
    port: PORT,
    user: USER,
    password: PASSWORD,
  });
  await connectToDB();
};

module.exports = { connectToDB, client, reconnectToDB };
