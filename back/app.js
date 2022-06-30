const express = require('express');
const cors = require('cors');
const tableRouter = require('./routers/tableRouter');
const { connectToDB } = require('./utils/db');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/get', tableRouter);

const start = async () => {
  await connectToDB();
  app.listen(8080, () => {
    console.log('running on port 8080');
  });
};

start();
