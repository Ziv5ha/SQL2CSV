const errorHandler = (err, req, res, next) => {
  const { type, error, msg } = err;
  switch (type) {
    case 404:
      console.error(msg);
      console.error(error);
      res.send(
        404,
        'Could not get a response from the DB. Either a problem with the query or the DB server. Check server logs for details.'
      );
      break;
    case 503:
      console.log('Failed connecting to DB');
      res.send('Failed connecting to DB');
      break;

    default:
      console.error('OH NO! something went wrong! check logs for details');
      console.error(error);
      res.send(400, 'something went wrong! check logs for details');
      break;
  }
};

module.exports = { errorHandler };
