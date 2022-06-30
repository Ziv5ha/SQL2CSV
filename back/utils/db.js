const { Sequelize } = require('sequelize');
const { DATABASE_URL } = require('./config');

// const sequelize = new Sequelize(DATABASE_URL, {
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   },
// });

// const connectToDB = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('connected to DB');
//   } catch (error) {
//     console.log('failed connecting to DB');
//   }
// };

const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  password: 'postgres',
});
const connectToDB = async () => {
  try {
    await client.connect();
    console.log('connected to DB');
  } catch (error) {
    console.log('failed connecting to DB');
  }
};

// const sequelize = '';

module.exports = { connectToDB, client };
// module.exports = { connectToDB, sequelize };
