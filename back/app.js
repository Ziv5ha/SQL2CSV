const express = require('express');
const cors = require('cors');
const open = require('open');
const converterRouter = require('./routers/converterRouter');
const tableRouter = require('./routers/tableRouter');
const homePageRouter = require('./routers/homePage');
const testRouter = require('./routers/testRouter');
const { errorHandler } = require('./error/errorHandler');
const { connectToDB } = require('./utils/db');
const { log } = require('./utils/log');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.use('/converter', converterRouter);
app.use('/get', tableRouter);
app.use('/test', testRouter);
app.get('/', homePageRouter);

app.use(errorHandler);

const start = async () => {
  await connectToDB();
  app.listen(8080, () => {
    log('\x1b[32mrunning on port 8080\x1b[0m');
  });
  open('http://localhost:8080');
};

start();
