require('dotenv').config();
module.exports = {
  HOST: process.env.HOST,
  PORT: process.env.PORT || 5432,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  DATABASE: process.env.DATABASE,
  CONNECTION_STRING: process.env.CONNECTION_STRING,
};
