const express = require('express');
const cors = require('cors');
const open = require('open');
const converterRouter = require('./routers/converterRouter');
const tableRouter = require('./routers/tableRouter');
const connectRouter = require('./routers/connectRouter');
const homePageRouter = require('./routers/homePage');
const testRouter = require('./routers/testRouter');
const { errorHandler } = require('./error/errorHandler');
const { connectToDB } = require('./utils/db');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.use('/converter', converterRouter);
app.use('/get', tableRouter);
app.use('/reconnect', connectRouter);
app.use('/test', testRouter);
app.get('/', homePageRouter);

app.use(errorHandler);

const start = async () => {
  await connectToDB();
  app.listen(8080, () => {
    console.log('running on port 8080');
  });
  open('http://localhost:8080');
};

start();
