const express = require('express');
const cors = require('cors');
const converterRouter = require('./routers/converterRouter');
const tableRouter = require('./routers/tableRouter');
const homePageRouter = require('./routers/homePage');
const testRouter = require('./routers/testRouter');
const { connectToDB } = require('./utils/db');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.use('/converter', converterRouter);
app.use('/get', tableRouter);
app.use('/test', testRouter);
app.get('/', homePageRouter);

const start = async () => {
  await connectToDB();
  app.listen(8080, () => {
    console.log('running on port 8080');
  });
};

start();
