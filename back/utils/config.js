require('dotenv').config();
module.exports = {
  HOST: process.env.DATABASE_URL,
  PORT: process.env.PORT || 5432,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
};
