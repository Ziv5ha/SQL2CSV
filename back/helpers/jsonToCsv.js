const { json2csv } = require('json-2-csv');
const fs = require('fs');

/**
 * Creates a csv file from data inputed in JSON form.
 * and sends it to the user
 *
 * @param {JSON} data input data in JSON.
 * @param {Express.Response} res Express request
 * @return Creates a csv file.
 */
const jsonToCsv = (data, res) => {
  json2csv(data, (err, csv) => {
    if (err) {
      console.error(err);
    } else {
      fs.writeFile('./temp/data.csv', csv, (err) => {
        if (err) console.log(err);
        else {
          console.log('File written successfully');
          res.send(true);
        }
      });
    }
  });
};

module.exports = jsonToCsv;
